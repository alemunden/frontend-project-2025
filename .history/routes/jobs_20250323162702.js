const express = require('express');
const router = express.Router();
const pool = require('../models/db');

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM applications ORDER BY applied_on DESC');
        res.render('index', { applications: result.rows });
    } catch (err) {
        console.error(err);
        res.send('Error retrieving data');
    }
});

module.exports = router;