const db = require('../config/connection');

async function getEmployees() {
    const res = await db.promise().query('SELECT e.id, e.first_name,e.last_name,r.title, d.name AS department, r.salary, CONCAT(m.first_name) AS manager FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d ON d.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id')
    return res[0]
}

async function getRoles() {
    const res = await db.promise().query('SELECT r.id,r.title d.name AS departmnet, r.salary FROM role r LEFT JOIN department d ON r.department_id = d.id')
    return res[0]
}

async function getDepartments() {
    const res = await db.promise().query('SELECT * FROM department')
    return res[0]
}