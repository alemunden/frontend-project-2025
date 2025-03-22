// const express = require('express');
// const bcrypt = require('bcryptjs');
// const pool = require('../models/db');
// const router = express.Router();

// router.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
//     res.redirect('/login');
// });

// module.exports = router;


const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../models/db'); // Database connection
const router = express.Router();

// 🟢 LOGIN ROUTE
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send('Invalid credentials');
        }

        // ✅ Store user session
        req.session.user = { id: user.id, email: user.email, username: user.username };
        res.redirect('/dashboard');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// 🟡 MIDDLEWARE: Ensure User is Logged In
function ensureAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login');
}

// 🔵 DASHBOARD (Protected Route)
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.session.user });
});

// 🟢 LOGOUT ROUTE
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

module.exports = router;
