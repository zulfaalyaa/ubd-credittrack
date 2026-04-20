// State Management
let currentUser = null;
let currentProgramme = null;
let userModules = [];

// API Base URL
const API_URL = window.location.origin;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    checkExistingSession();
});

// Check for existing session
function checkExistingSession() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainApp();
        loadUserData();
    }
}

// Initialize event listeners
function initializeEventListeners() {
    // Login
    document.getElementById('loginBtn').addEventListener('click', handleLogin);
    document.getElementById('regNumber').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            navigateToPage(page);
        });
    });

    // Programme selection
    document.getElementById('programmeSelect').addEventListener('change', handleProgrammeChange);

    // Module management
    document.getElementById('addModuleBtn').addEventListener('click', showModuleForm);
    document.getElementById('cancelModuleBtn').addEventListener('click', hideModuleForm);
    document.getElementById('saveModuleBtn').addEventListener('click', saveModule);
    document.getElementById('moduleCode').addEventListener('input', handleModuleCodeInput);
}

// Authentication
async function handleLogin() {
    const regNumber = document.getElementById('regNumber').value.trim().toUpperCase();
    
    if (!regNumber) {
        alert('Please enter your registration number');
        return;
    }

    if (!validateRegNumber(regNumber)) {
        alert('Invalid registration number format. Please use format like 22B6000');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ registrationNumber: regNumber })
        });

        const data = await response.json();

        if (data.success) {
            currentUser = data.user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            showMainApp();
            loadUserData();
        } else {
            alert('Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login. Please try again.');
    }
}

function validateRegNumber(regNumber) {
    // Format: YYXnnnnn where YY is year, X is a letter, nnnnn is numbers
    return /^\d{2}[A-Z]\d{4,5}$/.test(regNumber);
}

function handleLogout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    currentProgramme = null;
    userModules = [];
    
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('mainApp').classList.remove('active');
    document.getElementById('regNumber').value = '';
}

// UI Navigation
function showMainApp() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainApp').classList.add('active');
    document.getElementById('userRegNumber').textContent = currentUser.registration_number;
}

function navigateToPage(pageName) {
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });

    // Update content pages
    document.querySelectorAll('.content-page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(`${pageName}Page`).classList.add('active');

    // Refresh page content
    if (pageName === 'dashboard') {
        updateDashboard();
    } else if (pageName === 'modules') {
        updateModulesTable();
    } else if (pageName === 'breakdown') {
        updateBreakdown();
    }
}

// Load user data
async function loadUserData() {
    try {
        // Load profile
        const profileResponse = await fetch(`${API_URL}/api/profile/${currentUser.id}`);
        const profileData = await profileResponse.json();
        currentProgramme = profileData.programme;
        
        if (currentProgramme) {
            document.getElementById('programmeSelect').value = currentProgramme;
        }

        // Load modules
        const modulesResponse = await fetch(`${API_URL}/api/modules/${currentUser.id}`);
        userModules = await modulesResponse.json();

        updateDashboard();
        updateModulesTable();
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// Programme management
async function handleProgrammeChange(e) {
    const programme = e.target.value;
    
    if (!programme) return;

    try {
        await fetch(`${API_URL}/api/profile/${currentUser.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ programme })
        });

        currentProgramme = programme;
        populateModuleCodeList();
        updateDashboard();
    } catch (error) {
        console.error('Error updating programme:', error);
    }
}

// Module form management
function showModuleForm() {
    const form = document.getElementById('moduleForm');
    form.classList.remove('hidden');
    populateModuleCodeList();
    clearModuleForm();
}

function hideModuleForm() {
    document.getElementById('moduleForm').classList.add('hidden');
    clearModuleForm();
}

function clearModuleForm() {
    document.getElementById('moduleCode').value = '';
    document.getElementById('moduleName').value = '';
    document.getElementById('moduleCredits').value = '4';
    document.getElementById('moduleYear').value = '1';
    document.getElementById('moduleType').value = 'Degree Core';
}

function populateModuleCodeList() {
    const datalist = document.getElementById('moduleCodeList');
    datalist.innerHTML = '';

    if (!currentProgramme) return;

    // Add programme-specific modules
    const programmeModules = MODULES_DATABASE[currentProgramme] || [];
    const allModules = [...programmeModules, ...BREADTH_MODULES];

    allModules.forEach(module => {
        const option = document.createElement('option');
        option.value = module.code;
        option.textContent = `${module.code} - ${module.name}`;
        datalist.appendChild(option);
    });
}

function handleModuleCodeInput(e) {
    const code = e.target.value.toUpperCase();
    e.target.value = code;

    if (!currentProgramme) {
        alert('Please select your programme first');
        return;
    }

    const programmeModules = MODULES_DATABASE[currentProgramme] || [];
    const allModules = [...programmeModules, ...BREADTH_MODULES];
    
    const module = allModules.find(m => m.code === code);

    if (module) {
        document.getElementById('moduleName').value = module.name;
        document.getElementById('moduleCredits').value = module.credits;
        document.getElementById('moduleYear').value = module.year;
        document.getElementById('moduleType').value = module.type;
    }
}

async function saveModule() {
    const moduleCode = document.getElementById('moduleCode').value.trim().toUpperCase();
    const moduleName = document.getElementById('moduleName').value.trim();
    const credits = parseInt(document.getElementById('moduleCredits').value);
    const year = parseInt(document.getElementById('moduleYear').value);
    const type = document.getElementById('moduleType').value;

    if (!moduleCode || !moduleName) {
        alert('Please fill in all required fields');
        return;
    }

    // Check for duplicates
    if (userModules.some(m => m.module_code === moduleCode)) {
        alert('This module has already been added');
        return;
    }

    try {
        const response = await fetch(`${API_URL}/api/modules`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: currentUser.id,
                moduleCode,
                moduleName,
                credits,
                year,
                type
            })
        });

        const newModule = await response.json();
        userModules.push(newModule);
        
        hideModuleForm();
        updateModulesTable();
        updateDashboard();
        updateBreakdown();
    } catch (error) {
        console.error('Error saving module:', error);
        alert('Failed to save module. Please try again.');
    }
}

async function deleteModule(moduleId) {
    if (!confirm('Are you sure you want to remove this module?')) {
        return;
    }

    try {
        await fetch(`${API_URL}/api/modules/${moduleId}`, {
            method: 'DELETE'
        });

        userModules = userModules.filter(m => m.id !== moduleId);
        
        updateModulesTable();
        updateDashboard();
        updateBreakdown();
    } catch (error) {
        console.error('Error deleting module:', error);
        alert('Failed to delete module. Please try again.');
    }
}

// Update modules table
function updateModulesTable() {
    const tbody = document.getElementById('modulesTableBody');
    const emptyMessage = document.getElementById('emptyModulesMessage');

    tbody.innerHTML = '';

    if (userModules.length === 0) {
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';

    userModules.forEach(module => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="module-code">${module.module_code}</td>
            <td>${module.module_name}</td>
            <td>Year ${module.year}</td>
            <td><span class="module-type-badge ${module.type.toLowerCase().replace(/ /g, '-')}">${module.type}</span></td>
            <td>${module.credits} MC</td>
            <td>
                <button class="btn-delete" onclick="deleteModule(${module.id})">Remove</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Update dashboard
function updateDashboard() {
    const totalCredits = userModules.reduce((sum, m) => sum + m.credits, 0);
    const percentage = Math.round((totalCredits / 152) * 100);

    // Update overall progress
    document.getElementById('totalCredits').textContent = totalCredits;
    document.getElementById('overallProgressBar').querySelector('.progress-fill').style.width = `${percentage}%`;
    document.getElementById('overallProgressPercent').textContent = `${percentage}%`;

    // Calculate breakdown
    const breakdown = {
        'Degree Core': 0,
        'Major Core': 0,
        'Major Option': 0,
        'Compulsory Breadth': 0
    };

    userModules.forEach(module => {
        if (breakdown[module.type] !== undefined) {
            breakdown[module.type] += module.credits;
        }
    });

    // Update category cards
    const categoryGrid = document.getElementById('categoryGrid');
    categoryGrid.innerHTML = '';

    const categories = [
        { name: 'Degree Core', icon: '🎓', required: 12, color: '#3b82f6' },
        { name: 'Major Core', icon: '📚', required: 60, color: '#10b981' },
        { name: 'Major Option', icon: '🔬', required: 32, color: '#f59e0b' },
        { name: 'Compulsory Breadth', icon: '🌍', required: 16, color: '#ef4444' }
    ];

    categories.forEach(cat => {
        const completed = breakdown[cat.name] || 0;
        const progress = Math.min(100, Math.round((completed / cat.required) * 100));
        const isComplete = completed >= cat.required;

        const card = document.createElement('div');
        card.className = `category-card ${isComplete ? 'completed' : ''}`;
        card.style.borderLeftColor = cat.color;
        card.innerHTML = `
            <div class="category-header">
                <span class="category-icon">${cat.icon}</span>
                <span class="category-credits">${completed}/${cat.required}</span>
            </div>
            <div class="category-name">${cat.name}</div>
            <div class="category-progress">
                <div class="category-progress-fill" style="width: ${progress}%; background: ${cat.color};"></div>
            </div>
        `;
        categoryGrid.appendChild(card);
    });
}

// Update breakdown page
function updateBreakdown() {
    const totalCredits = userModules.reduce((sum, m) => sum + m.credits, 0);
    const remaining = 152 - totalCredits;

    // Update summary cards
    document.getElementById('completedCredits').textContent = `${totalCredits} MC`;
    document.getElementById('remainingCredits').textContent = `${remaining} MC`;

    // Update alerts
    const alertsContainer = document.getElementById('alertsContainer');
    alertsContainer.innerHTML = '';

    if (totalCredits >= 152) {
        alertsContainer.innerHTML = `
            <div class="alert alert-success">
                <strong>Congratulations!</strong> You have completed all required credits for graduation.
            </div>
        `;
    } else {
        const breakdown = {
            'Degree Core': { completed: 0, required: 12 },
            'Major Core': { completed: 0, required: 60 },
            'Major Option': { completed: 0, required: 32 },
            'Compulsory Breadth': { completed: 0, required: 16 }
        };

        userModules.forEach(module => {
            if (breakdown[module.type]) {
                breakdown[module.type].completed += module.credits;
            }
        });

        let hasWarnings = false;
        Object.entries(breakdown).forEach(([category, data]) => {
            if (data.completed < data.required) {
                hasWarnings = true;
                alertsContainer.innerHTML += `
                    <div class="alert alert-warning">
                        <strong>${category}:</strong> You need ${data.required - data.completed} more credits to complete this category.
                    </div>
                `;
            }
        });

        if (!hasWarnings) {
            alertsContainer.innerHTML = `
                <div class="alert alert-success">
                    <strong>Great progress!</strong> All category requirements are met. You need ${remaining} more credits to reach 152 MC.
                </div>
            `;
        }
    }

    // Update breakdown table
    const tbody = document.getElementById('breakdownTableBody');
    tbody.innerHTML = '';

    const categories = [
        { name: 'Degree Core', required: 12 },
        { name: 'Major Core', required: 60 },
        { name: 'Major Option', required: 32 },
        { name: 'Compulsory Breadth', required: 16 }
    ];

    const breakdown = {
        'Degree Core': 0,
        'Major Core': 0,
        'Major Option': 0,
        'Compulsory Breadth': 0
    };

    userModules.forEach(module => {
        if (breakdown[module.type] !== undefined) {
            breakdown[module.type] += module.credits;
        }
    });

    categories.forEach(cat => {
        const completed = breakdown[cat.name] || 0;
        const progress = Math.min(100, Math.round((completed / cat.required) * 100));
        const isComplete = completed >= cat.required;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${cat.name}</strong></td>
            <td>${cat.required} MC</td>
            <td>${completed} MC</td>
            <td>
                <div class="category-progress">
                    <div class="category-progress-fill" style="width: ${progress}%;"></div>
                </div>
                ${progress}%
            </td>
            <td>
                <span class="status-badge ${isComplete ? 'complete' : 'in-progress'}">
                    ${isComplete ? 'Complete' : 'In Progress'}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}
