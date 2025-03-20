import pkg from 'pg';
const { Pool } = pkg;

import dotenv from 'dotenv';

// Load .env variables
dotenv.config();

const pool = new Pool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
});

const connectToDB = async () => {
    try {
        await pool.connect();
        console.log('Connection was successfull');
    } catch (err) {
        console.error(`Error trying to connect to database: ${err}`);
    }
};

export {pool, connectToDB};