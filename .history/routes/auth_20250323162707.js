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