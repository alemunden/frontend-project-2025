import express from 'express';
import pool from './database/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/index', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM applications ORDER BY id ASC');
        res.render('index', { applications: rows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching applications');
    }
});

app.delete('/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM applications WHERE id = $1', [id]);
        res.json({ message: 'Application deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error deleting application' });
    }
});

app.put('/applications/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { company, position, status, applied_on } = req.body;
        await pool.query(
            'UPDATE applications SET company = $1, position = $2, status = $3, applied_on = $4 WHERE id = $5',
            [company, position, status, applied_on, id]
        );
        res.json({ message: 'Application updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error updating application' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
