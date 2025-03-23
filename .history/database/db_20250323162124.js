import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'job_tracker', 
  user: 'postgres',
  password: 'deimosIRL123!'
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

export default pool;



