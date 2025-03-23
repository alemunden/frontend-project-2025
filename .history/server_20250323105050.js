require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true
}));

const jobRoutes = require('./routes/jobs');
const authRoutes = require('./routes/auth');
app.use('/', jobRoutes);
app.use('/', authRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));