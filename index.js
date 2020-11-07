const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');

// Internal modules
const api = require('./api.js');
const generateMarkdown = require('./markdown.js');

const questions = [
    
{   type: 'input',
    message: "what is your GitHub username?",
    name: "username",
    default: "rffrye",
},
{   type: 'input',
    message: "What is the name of your GitHub repo?",
    name: 'repo',
    default: 'readme-generator',
},
{
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
},
{
    type: 'input',
    message: "Write a description of your project.",
    name: 'description',
    default: 'Project Description', 
},
{
    type: 'input',
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: 'installation'
},
{
    type: 'input',
    message: "Provide instructions and examples of your project in use for the Usage section.",
    name: 'usage'
},
{
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
},
{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['MIT License','Apache License 2.0','Mozilla Public License 2.0'],
    name: 'license'
}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}
const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();