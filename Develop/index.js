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
        name: "installation instructions",
        message: "Are there any installation instructions for this project?"
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
