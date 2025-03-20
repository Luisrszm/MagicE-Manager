// import inquirer from 'inquirer'
import inquirer from 'inquirer';
import { pool, connectToDB } from './connection.js'

await connectToDB();

export class Cli {

    constructor(){}
    
    // View departments table function
    viewDep(): void {
        const query = "select * from department";
        pool.query(query, (err, res) => {
            if (err) throw err;
            console.log('\n');
            console.table(res.rows)
        });
    };

    // // View roles table function
    viewRol() {
        const query = "select * from role";
        pool.query(query, (err, res) => {
            if (err) throw err;
            console.log('\n');
            console.table(res.rows)
        });
    };

    // // View employees table function
    viewEmp() {
        const query = "select * from employee";
        pool.query(query, (err, res) => {
            if (err) throw err;
            console.log('\n');
            console.table(res.rows)
        });
    };

    // // Add department function
    async addDep() {
        const { department } = await inquirer.prompt([
            {
                type: 'input',
                name: 'department',
                message: 'Which new department would you like to add? '
            }
        ]);
        
        const query = "insert into department (name) values ($1)";

        pool.query(query, [department], (err, _res) => {
            if (err) throw err;
            console.log('\n New department added successfully!');
        });
    };

    // // Add role function
    async addRol() {
        const role = await inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of the new role you would like to add? '
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Add a salary amount: '
            },
            {
                type: 'input',
                name: 'depID',
                message: 'Type the department ID where the role will be added: '
            }
        ]);
        
        const query = "insert into role (name, salary, department) values ($1, $2, $3)";

        pool.query(query, [role.title, role.salary, role.depID], (err, _res) => {
            if (err) throw err;
            console.log('\n New role added successfully!');
        }); 
    };

    // // Add employee function
    async addEmp() {
        const employee = await inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the FIRST NAME of the new employee you would like to add? '
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the LAST NAME of the new employee you would like to add? '
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Type the ROLE ID that the employee will have: '
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Type the DEPARTMENT ID where the employee will work at: '
            }
        ]);
        
        const query = "insert into employee (first_name, last_name, role_id, manager_id) values ($1, $2, $3, $4)";

        pool.query(query, [employee.first_name, employee.last_name, employee.role_id, employee.manager_id], (err, _res) => {
            if (err) throw err;
            console.log('\n New employee added successfully!');
        }); 
    };

    // // Edit employee role function
    async editEmp() {
        
    };

};
