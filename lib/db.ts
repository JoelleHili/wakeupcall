import { Pool } from 'pg'; // Import pg Pool for connection pooling

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Use the environment variable
});

export default pool;
