const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [

    "What is your email address"];

const questionPrompts = () => {
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
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test instructions?",
            name: "test"
        },
        {
            type: "input",
            message: "What licenses are you using?",
            name: "licenses"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        }
    ]);
};

const generateReadMe = (answers) =>


questionPrompts()
