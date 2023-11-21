// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is this project about?"
    },
    {
        type: "input",
        name: "installation",
        message: "If applicable, what are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Instructions and examples for use?"
    },
    {
        type: "input",
        name: "contributions",
        message: "How can others contribute to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests for your application?"
    },
    {
        type: "input",
        name: "gitUser",
        message: "Github username:"
    },
    {
        type: "input",
        name: "email",
        message: "E-mail:"
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: ["MIT", "Apache", "Unlicense", "IBM", "Mozilla", "ISC", "Eclipse"]
    },
];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        fs.writeFileSync("README_TEST.md", generateMarkdown({ ...response }))

    }).catch((error) => { console.log(error, "Whoopsy Daisy, error!") })
}

// Function call to initialize app
init();
