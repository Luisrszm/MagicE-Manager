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
        // case 'View all roles':
        //     // viewRol class call
        //     //Cli.viewRol();
        //     startCli();
        //     break;
        // case 'View all employees':
        //     // viewEmp class call
        //     //Cli.viewEmp();
        //     startCli();
        //     break;
        // case 'Add a department':
        //     // addDep class call
        //     //Cli.addDep();
        //     startCli();
        //     break;
        // case 'Add a role':
        //     // addRol class call
        //     //Cli.addRol();
        //     startCli();
        //     break;
        // case 'Add a employee':
        //     // addEmp class call
        //     //Cli.addEmp();
        //     startCli();
        //     break;
        // case 'Update an employee role':
        //     // editEmp class call
        //     //Cli.editEmp();
        //     startCli();
        //     break;
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


