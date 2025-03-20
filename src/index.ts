import inquirer from 'inquirer'
import { Cli } from './Cli.js'

const startCli = async (runCli: Cli) => {

    const {menu} = await inquirer.prompt([
        {
            type: 'list',
            name:'menu',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit'
            ]
        },  
    ])

    switch (menu) {
        case 'View all departments':
            // viewDep class call
            runCli.viewDep();
            startCli(runCli);
            break;
        case 'View all roles':
            // viewRol class call
            runCli.viewRol();
            startCli(runCli);
            break;
        case 'View all employees':
            // viewEmp class call
            runCli.viewEmp();
            startCli(runCli);
            break;
        case 'Add a department':
            // addDep class call
            runCli.addDep();
            startCli(runCli);
            break;
        case 'Add a role':
            // addRol class call
            runCli.addRol();
            startCli(runCli);
            break;
        case 'Add a employee':
            // addEmp class call
            runCli.addEmp();
            startCli(runCli);
            break;
        case 'Update an employee role':
            // editEmp class call
            runCli.editEmp();
            startCli(runCli);
            break;
        default:
            console.log(`---
                Closing Cli. To restart type: "node index.js"
                Goodbye!
                ---`);
            process.exit(0);
            break;
    }
}

const runCli = new Cli
startCli(runCli);


