import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API Routes

// Login/Authentication
app.post('/api/login', async (req, res) => {
  const { registrationNumber } = req.body;
  
  try {
    // Check if user exists
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('registration_number', registrationNumber)
      .single();

    if (error && error.code !== 'PGRST116') {
      return res.status(500).json({ error: error.message });
    }

    // If user doesn't exist, create new user
    if (!user) {
      const { data: newUser, error: insertError } = await supabase
        .from('users')
        .insert([{ registration_number: registrationNumber }])
        .select()
        .single();

      if (insertError) {
        return res.status(500).json({ error: insertError.message });
      }

      return res.json({ 
        success: true, 
        user: newUser,
        message: 'Account created successfully' 
      });
    }

    res.json({ 
      success: true, 
      user,
      message: 'Login successful' 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user profile
app.get('/api/profile/:userId', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', req.params.userId)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user programme
app.put('/api/profile/:userId', async (req, res) => {
  const { programme } = req.body;
  
  try {
    const { data, error } = await supabase
      .from('users')
      .update({ programme })
      .eq('id', req.params.userId)
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add module
app.post('/api/modules', async (req, res) => {
  const { userId, moduleCode, moduleName, credits, year, type } = req.body;
  
  try {
    const { data, error } = await supabase
      .from('modules')
      .insert([{
        user_id: userId,
        module_code: moduleCode.toUpperCase(),
        module_name: moduleName,
        credits,
        year,
        type
      }])
      .select()
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all modules for a user
app.get('/api/modules/:userId', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('modules')
      .select('*')
      .eq('user_id', req.params.userId)
      .order('year', { ascending: true });

    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete module
app.delete('/api/modules/:moduleId', async (req, res) => {
  try {
    const { error } = await supabase
      .from('modules')
      .delete()
      .eq('id', req.params.moduleId);

    if (error) throw error;
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get credit summary
app.get('/api/credits/:userId', async (req, res) => {
  try {
    const { data: modules, error } = await supabase
      .from('modules')
      .select('*')
      .eq('user_id', req.params.userId);

    if (error) throw error;

    const summary = {
      totalCredits: 0,
      breakdown: {
        'Degree Core': 0,
        'Major Core': 0,
        'Major Option': 0,
        'Compulsory Breadth': 0
      }
    };

    modules.forEach(module => {
      summary.totalCredits += module.credits;
      if (summary.breakdown[module.type] !== undefined) {
        summary.breakdown[module.type] += module.credits;
      }
    });

    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}`);
});
