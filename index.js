const inquirer = require("inquirer");
const fs = require("fs");

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
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: 'contributing'
},
{
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
},
{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
}
];
