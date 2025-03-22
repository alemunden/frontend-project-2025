// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });


// router.post('/add', upload.fields([{ name: 'logo' }, { name: 'job_description' }]), async (req, res) => {
//     const { company, position, status, applied_on, notes } = req.body;
//     const logo_path = req.files['logo'] ? req.files['logo'][0].path : null;
//     const job_description = req.files['job_description'] ? req.files['job_description'][0].path : null;
//     await pool.query('INSERT INTO applications (company, position, status, applied_on, notes, logo_path, job_description) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
//         [company, position, status, applied_on, notes, logo_path, job_description]);
    
//         res.redirect('/');
// });

// Trial for Tamasha

const express = require('express');
const router = express.Router();
const pool = require('../models/db'); // Import the database connection

// 🟢 READ: Display all job applications
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM applications ORDER BY applied_on DESC');
        res.render('index', { applications: result.rows });
    } catch (err) {
        console.error(err);
        res.send('Error retrieving data');
    }
});

// Export the router correctly
module.exports = router;