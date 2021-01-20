const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const questionPrompts = () => {
    return inquirer.prompt([
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
            type: "checkbox",
            message: "What licenses are you using?",
            name: "licenses",
            choices: ["MIT", "Apache", "GNU"]
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
function generateReadMe(answers) {
const readMeText = `# ${answers.title}

## Table of Contents
[Description](#Description)  
[Installation Instructions](#Installation-Instructions)  
[Usage Information](#Usage-Information)  
[Contributions](#Contributions)  
[Test Instructions](#Test-Instructions)  
[Licenses](#Licenses)  
[Contact Me](#Contact-Me)  

## Description
${answers.desc}

## Installation Instructions
${answers.install}

## Usage Information
${answers.use}

## Contributions
${answers.contribution}

## Test Instructions
${answers.test}

## Licenses
![${answers.licenses}]https://img.shields.io/badge/license-${answers.licenses}-blue.svg

## Contact Me
https://github.com/${answers.github}
${answers.email}
If you have any question please contact me!
`
    return readMeText;
}

async function init() {
    try {
        var answers = {};
        answers = await questionPrompts();
        const md = generateReadMe(answers)
        await writeFileAsync("readme-gen.md", md)
        console.log("Readme created!");
    }
    catch (err) {
        console.log(err)
    }
}

init();
