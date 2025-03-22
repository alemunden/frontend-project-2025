// import dotenv from 'dotenv';
// // const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL
// });

// module.exports = pool;

const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = pool;