# UBD SDS CreditTrack

A modern web application for tracking modular credits for School of Digital Science students at Universiti Brunei Darussalam.

## Features

- ✅ Login with registration number only
- ✅ Programme selection (5 SDS programmes supported)
- ✅ Add/remove modules with autocomplete
- ✅ Auto-detection of module type and credits
- ✅ Real-time credit tracking and progress visualization
- ✅ Category breakdown (Degree Core, Major Core, Major Option, Compulsory Breadth)
- ✅ Graduation requirement validation
- ✅ Beautiful, responsive UI

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **Backend**: Node.js + Express
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Render

## Quick Start

### Prerequisites

- Node.js 18+ installed
- A Supabase account
- A Render account (for deployment)

### 1. Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once created, go to **Project Settings** > **API**
3. Copy your **Project URL** and **anon/public key**
4. Go to **SQL Editor** and run the contents of `database-schema.sql`

### 2. Local Development

1. Clone/download this project

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Edit `.env` and add your Supabase credentials:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

5. Start the development server:
```bash
npm start
```

6. Open your browser to `http://localhost:3000`

### 3. Deploy to Render

1. Push your code to GitHub (create a new repository)

2. Go to [render.com](https://render.com) and sign in

3. Click **New** > **Web Service**

4. Connect your GitHub repository

5. Configure the service:
   - **Name**: ubd-credittrack (or your choice)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

6. Add Environment Variables:
   - Click **Advanced** > **Add Environment Variable**
   - Add `SUPABASE_URL` with your Supabase URL
   - Add `SUPABASE_ANON_KEY` with your Supabase anon key
   - Add `PORT` with value `3000`

7. Click **Create Web Service**

8. Wait for deployment (usually 2-5 minutes)

9. Your app will be live at `https://your-app-name.onrender.com`

## Usage

### For Students

1. **Login**: Enter your registration number (e.g., 22B6000)
2. **Select Programme**: Choose your SDS programme from the dropdown
3. **Add Modules**: 
   - Click "Add Module"
   - Start typing a module code (e.g., ZS-4301)
   - Module name, credits, and type auto-fill
   - Adjust year if needed
   - Click "Save Module"
4. **Track Progress**: View your overall progress and category breakdown
5. **Check Requirements**: Go to "Breakdown" to see what's remaining

### Login Credentials

The system uses registration number only authentication:
- Format: `YYXnnnnn` where YY = year, X = letter, nnnnn = numbers
- Example: `22B6000`, `21B4521`, `23A1234`

First-time login automatically creates an account.

## Supported Programmes

1. Applied Artificial Intelligence
2. Artificial Intelligence & Robotics
3. Computer Science
4. Cybersecurity and Forensics
5. Data Science

## Credit Requirements

- **Total Credits Required**: 152 MC
- **Degree Core**: 12 MC
- **Major Core**: 60 MC
- **Major Option**: 32 MC
- **Compulsory Breadth**: 16 MC
- **Discovery Year**: 32 MC (not tracked by this system)

## Project Structure

```
ubd-credittrack/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # All styles
│   ├── app.js              # Main application logic
│   ├── modules-data.js     # Module database
│   └── ubd-logo.png        # UBD logo
├── server.js               # Express server
├── database-schema.sql     # Supabase schema
├── package.json            # Dependencies
├── .env.example            # Environment template
└── README.md              # This file
```

## Troubleshooting

### Database Connection Issues

- Verify your Supabase URL and key in `.env`
- Check that you ran the `database-schema.sql` in Supabase SQL Editor
- Ensure Row Level Security (RLS) policies are properly set

### Modules Not Loading

- Clear browser cache
- Check browser console for errors
- Verify programme is selected

### Deployment Issues on Render

- Check that all environment variables are set
- View logs in Render dashboard
- Ensure build completed successfully

## API Endpoints

- `POST /api/login` - Login/register with registration number
- `GET /api/profile/:userId` - Get user profile
- `PUT /api/profile/:userId` - Update user programme
- `POST /api/modules` - Add a new module
- `GET /api/modules/:userId` - Get all user modules
- `DELETE /api/modules/:moduleId` - Delete a module
- `GET /api/credits/:userId` - Get credit summary

## Module Database

All SDS programme modules are pre-loaded:
- 5 programmes with all modules
- Compulsory breadth modules included
- Auto-classification by module code
- Auto-fill of module name and credits

## Future Enhancements

- [ ] Export progress as PDF
- [ ] Module recommendations based on prerequisites
- [ ] GPA tracking
- [ ] Semester planning
- [ ] Share progress with advisors
- [ ] Mobile app (React Native)

## Support

For issues or questions:
1. Check this README first
2. Review console errors in browser
3. Check Render logs for deployment issues
4. Verify Supabase connection and schema

## License

This project is for educational purposes at Universiti Brunei Darussalam.

## Author

Zulfa 'Alyaa Binti Haji Muhammad Aiman (22B6000)
ZS-4301 Cloud Computing Final Assignment
Universiti Brunei Darussalam - School of Digital Science
