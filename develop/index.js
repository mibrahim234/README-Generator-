// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeReadMe = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project site URL?",
      name: "url",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter in installation instructions of your project:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter in the usage information for your project:",
      name: "usage",
    },
    {
      type: "input",
      message: "Would you like to credit anyone for this project?",
      name: "credits",
    },
    {
      type: "input",
      message: "Enter in the test instructions for this project:",
      name: "tests",
    },
    {
      type: "list",
      message: "Choose a license from the following list:",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        // "BSD T-Clause 'Simplified' License",
        // "BSD 3-Clause 'New' or 'Revised' License",
        // "Creative Commons Zero v1.0 Universal",
        // "Eclipse Public License 2.0",
        // "GNU Affero General Public License v2.1",
        // "GNU General Public License v2.0",
        // "GNU Lesser General Public License v2.1",
        // "GNU Lesser General Public License v3.0",
        "Mozilla Public License 2.0",
        "The Unilicense",
      ],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();