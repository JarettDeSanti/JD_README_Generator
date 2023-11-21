// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



// TODO: Create an array of questions for user input
const questions = [

];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        fs.writeFileSync("README_TEST.md", generateMarkdown({ ...response }))

    }).catch((error) => { console.log(error, "Whoopsy Daisy, error!") })
}

// Function call to initialize app
init();
