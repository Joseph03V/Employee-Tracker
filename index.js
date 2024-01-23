const {prompt,Separator} = require('inquirer')
const consoleTable = require('console.table')
require('dotenv').config()
const {menu,addEmployee,updateRole,addRole,AddDepartment, addDepartment} = require('./lib/prompt')
const {getEmployees,getRoles,getDepartments} = require('./lib/query')
const db = require("./config/connection")


async function promptMenu() {
    const answer = await prompt(menu)
    switch(answer.menu) {
        case "View All Departments":
            const departments = await getDepartments()
            console.table(departments)
            promptMenu()
            break;
            
        case "View All Roles":
            const roles = await getRoles()
            console.table(roles)
            promptMenu()
            break;

        case "View All Employees":
            const employees = await getEmployees()
            console.table(employees)
            promptMenu()
            break;

        case "Add Department":
            await addDepartment()
            promptMenu()
            break;

        case "Add Role":
            await addRole()
            promptMenu()
            break;

        case "Add Employee":
            await addEmployee()
            promptMenu()
            break;

        case "Update Employee Role":
            await updateRole()
            promptMenu()
            break;

        default: process.exit()
    }
}


async function newDepartment() {
    const res = await prompt(addDepartment)
    await db.promise().query(`INSERT INTO department (name) VALUES (?)`,
    res.department,(err,result) => {
        if (err) {
            console.log(err)
        }
        })
        console.log(`Successfully added ${res.department} to the database`)
}

async function newRole() {
    const res = await addRole()
    await db.promise().query(`INSERT INTO role (title,salary,department_id) VALUES (?,?,?)`,
    [res.role,res.salary,res.departmentId],(err,result) => {
        if(err) {
            console.log(err)
        }
    })
    console.log(`Successfully added ${res.role} to the database`)
}

async function newEmployee() {
    const res = await addEmployee() 
    await db.promise().query(`INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?),`,
    [res.firstName,res.lastName,res.role,res.manager_id],(err,result) => {
        if (err) {
            console.log(err)
        }
    })
    console.log(`Successfully added ${res.firstName} ${res.lastName} to the database`)
}

async function employeeUptate() {
    const res = await updateRole()
    await db.promise().query(`UPDATE employee SET role_id = ? WHERE id = ?`,
    [res.roleId,res.employeeId],(err,result) => {
        if (err) {
            console.log(err)
        }
    })
    console.log('Successfully updated employee info in the database')
}



promptMenu();