// import inquirer from 'inquirer'
import { pool, connectToDB } from './connection.js'

await connectToDB();

export class Cli {

    constructor(){}
    
    // View departments table function
    viewDep(): void {
        const query = "select * from public.departments";
        pool.query(query, (err, res) => {
            if (err) throw err;
            console.table(res.rows)
        });
    };

    // // View roles table function
    // async this.viewRol() {
        
    // };

    // // View employees table function
    // async this.viewEmp() {
        
    // };

    // // Add department function
    // async this.addDep() {
        
    // };

    // // Add role function
    // async this.AddRol() {
        
    // };

    // // Add employee function
    // async this.addEmp() {
        
    // };

    // // Edit employee role function
    // async this.editEmp() {
        
    // };

};
