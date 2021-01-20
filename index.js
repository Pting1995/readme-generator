const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [ 
"What are the contribution guidelines?",
"What are the test instructions?",
"What licenses?",
"What is your GitHub username?",
"What is your email address"];

const questionPrompts = () =>
    inquirer.prompt([
        {
            type: "input",
            message: "What is your readme title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your description?",
            name: "desc"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "install"
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "use"
        }

    ])