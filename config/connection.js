const mysql = require('mysql2');
require('dotenv').config()
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('Successfully Connected to Database!')
);

module.exports = db;