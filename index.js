const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const members = []
const memberId = []

const render = require('./src/page-template')
const Choice = require('inquirer/lib/objects/choice')

function createManager() {
    inquirer.prompt(
        [

            {type: 'input',
            name: 'managerName',
            message: 'What is your managers name?'},
        
            {type: 'input',
            name: 'managerId',
            message: 'What is your managers Id?'},
        
            {type: 'input',
            name: 'managerEmail',
            message: 'What is your managers Email?'},
        
            {type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is your managers Office Number?'}
        
        
        
        ]
    ).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        members.push(manager)
        memberId.push(answers.managerId)

        createTeam();
    }) 

}

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamlist",
            message: "Would you like to create a new team member?",
            choices: ["Engineer", "Intern", "Dont need new members"]
        }
    ]).then(answers => {
        switch (answers.teamlist) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam()
        }
    })
}



var employeeQ = [

    {type: 'input',
    name: 'EmployeeName',
    message: 'What is your managers name?'},



]