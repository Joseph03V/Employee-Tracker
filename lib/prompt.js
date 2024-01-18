const db = require('../config/connection');

async function getEmployees() {
    const res = await db.promise().query('SELECT')
}