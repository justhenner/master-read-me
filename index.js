// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md";

// TODO: Create an array of questions for user input
// const questions = [];

const questions = [
        {
            type: 'input',
            message: 'insert project title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'insert project description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'insert project table of contents',
            name: 'table of contents',
        },
        {
            type: 'input',
            message: 'insert project installation',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'insert project usage',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'select project license',
            name: 'license',
            choices: ['MIT', 'Apache License 2.0', 'ISC', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense', 'No license',],
        },
        {
            type: 'input',
            message: 'insert project contributing',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'insert project tests',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'insert github username',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'insert email address',
            name: 'email',
        }
    ];


    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const repoNameStr = generateMarkdown(data)
fs.writeFile('fileName', repoNameStr, function(err){
    if (err) throw err; 
        console.log("success!")
    })
}
    // file written successfully


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile(fileName, data)
    });
}
init();
