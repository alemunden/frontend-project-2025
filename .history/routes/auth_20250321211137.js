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


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const pool = require('../models/db'); // Database connection
// const router = express.Router();

// // 🟢 LOGIN ROUTE
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);

//         await pool.query(
//             'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)',
//             [username, email, hashedPassword]
//         );

//         res.redirect('/login');
//     } catch (err) {
//         console.error('Error registering user:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // 🟡 MIDDLEWARE: Ensure User is Logged In
// function ensureAuthenticated(req, res, next) {
//     if (req.session.user) {
//         return next();
//     }
//     res.redirect('/login');
// }

// // 🔵 DASHBOARD (Protected Route)
// router.get('/dashboard', ensureAuthenticated, (req, res) => {
//     res.render('dashboard', { user: req.session.user });
// });

// // 🟢 LOGOUT ROUTE
// router.get('/logout', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/login');
//     });
// });

// module.exports = router;


// Add authentication logic:
const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../models/db');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
    res.redirect('/login');
});

module.exports = router;