// const { Pool } = require('pg');
// require('dotenv').config(); // Only necessary if you're using other environment variables

// const pool = new Pool({
//   host: 'localhost',       // PostgreSQL server address
//   port: 5432,              // Default PostgreSQL port
//   database: 'job tracker', // Your database name
//   user: 'postgres',        // Your database username
//   password: 'tham123'      // Your actual password for PostgreSQL
// });

// pool.connect((err) => {
//   if (err) {
//     console.error('Connection error', err.stack);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// module.exports = pool;

// import { Pool } from 'pg';

// // Create a new pool using configuration appropriate for your database
// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   database: 'job tracker',  // Replace with your actual database name
//   user: 'postgres',          // Replace with your actual username
//   password: 'tham123'       // Replace with your actual password
// });

// pool.on('connect', () => {
//   console.log('Connected to the database');
// });

// export default pool;

// Import the entire 'pg' package

// Import the entire pg module as a default import
import pg from 'pg';
// Destructure Pool from the pg module
const { Pool } = pg;

// Now continue as previously
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'job_tracker', // Make sure these values are correct
  user: 'postgres',
  password: 'your_password'
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

export default pool;



