const {getEmployees,getRoles,getDepartments} = require('../lib/query')
const {prompt} = require('inquirer')

const menu = 
{
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Quit Tracker",
    ]
}



const addDepartment = {
    type: "input",
    name: "department",
    message: "What is the name of the department?",
    validate: (ans) => ans ? true: console.log("Please enter a valid department"),
}

async function addRole() {
    const department = await getDepartments()
    departmentChoices = department.map(d => {
        return {name: d.name,value: d.id}
    })
    const answer = prompt([
        {
            type: "input",
            name: "role",
            message: "What is the name of the role?",
            validate: (ans) => ans ? true: console.log("Please enter a valid role"),
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of this role?",
        },
        {
            type: "list",
            name: "departmentId",
            message: "What department does the role belong to?",
            choices: departmentChoices,
        }
    ])
    return answer
}


async function addEmployee() {
    const employee = await getEmployees()
    employeeChoices = employee.map(e => {
        return {name: e.first_name + " " + e.last_name, value: e.id}
    })
    employeeChoices.unshift({name: "None", value: null})
    const role = await getRoles()
    roleChoices = role.map(r => {
        return {name: r.title,value: r.id}
    })
    const answer = await prompt ([
        {
            type: "input",
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role",
            message: "What is this employee's role?",
            choices: roleChoices,
        },
        {
            type: "list",
            name: "manager_id",
            message: "Who is the employee's manager?",
            choices: employeeChoices,
        }
    ])
    return answer
}


async function updateRole() {
    const employee = await getEmployees()
    employeeChoices = employee.map(e => {
        return {name: e.first_name + " " + e.last_name, value: e.id}
    })
    const role = await getRoles()
    roleChoices = role.map(r => {
        return {name: r.title,value: r.id}
    })
    const answer = await prompt ([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee needs updating?",
            choices: employeeChoices,
        },
        {
            type: "list",
            name: "roleId",
            message: "Which role do you want to give the selected employee?",
            choices: roleChoices,
        }
    ])
    return answer
}

module.exports = {menu,addDepartment,addRole,addEmployee,updateRole}