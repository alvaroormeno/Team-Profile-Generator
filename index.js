const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')


const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template")
const members = []
const memberId = []



function menu() {

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

function addIntern() {
    inquirer.prompt(
        [

            {type: 'input',
            name: 'internName',
            message: 'What is your intern name?'},
        
            {type: 'input',
            name: 'internId',
            message: 'What is your intern Id?'},
        
            {type: 'input',
            name: 'internEmail',
            message: 'What is your intern Email?'},
        
            {type: 'input',
            name: 'internSchool',
            message: 'What is your School Name?'}
        
        
        
        ]
    ).then(answers => {
        const intern = new Intern (answers.internName, answers.internrId, answers.internEmail, answers.internGithub)
        members.push(intern)
        memberId.push(answers.internId)

        createTeam();
    }) 

}


function addEngineer() {
    inquirer.prompt(
        [

            {type: 'input',
            name: 'engineerName',
            message: 'What is your engineer name?'},
        
            {type: 'input',
            name: 'engineerId',
            message: 'What is your engineer Id?'},
        
            {type: 'input',
            name: 'engineerEmail',
            message: 'What is your engineer Email?'},
        
            {type: 'input',
            name: 'engineerGithub',
            message: 'What is your engineer Office Number?'}
        
        
        
        ]
    ).then(answers => {
        const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        members.push(engineer)
        memberId.push(answers.engineerId)

        createTeam();
    }) 

}

function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(members), "UTF-8");
}

// function buildTeam () {
//     if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR)

//     } 

//     fs.writeFileSync(outputPath, render(members),"utf-8")

// }

createManager();

}

menu();






// ]