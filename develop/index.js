// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "BSD T-Clause 'Simplified' License",
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",
        "The Unilicense",``
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

  function promptUser() {
    return inquirer.prompt(questions);
  }
  
  // function to initialize app
   async function init() {
    try {
      const response = await promptUser();
  
      let readMeText = generateMarkdown(response);
  
      // function to write file 
  fs.writeFileSync("DEMO-README.MD", readMeText);
      console.log("Successfully wrote to DEMO-README.md");
    } catch (err) {
      console.log(err);
    }
  }
  
  // call to initialize app
  init();




