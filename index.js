// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
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
            type: 'list',
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
            name: 'questions',
        },
        {
            type: 'input',
            message: 'insert email address',
            name: 'questions',
        }
    ])
    .then((response) => {
        fs.writeFile('.md', '${response.title}, ${response.description}, ${response.table-of-contents}, ${response.installation}, ${response.usage}, ${response.license}, ${response.contributing}, ${response.tests}, ${response.questions}, ${response.questions}', function(err) {})
    }
    );

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

fs.writeFile('readmeMaster.md', repoNamesStr, function(err) {
    if (err) {
        throw err;
    }

    console.log('Saved ${repoNames.length} repos');
    });
    // file written successfully



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions