// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

// TODO: Create an array of questions for user input
const questions = [ {
    name: "title",
    type: "input",
    message: "What is your project title?",
    },
    {
    name: "description",
    type: "input",
    message: "Provide a description of the project."
    },
    
    {
        name: "installation",
        type: "input",
        message: "Provide instructions on installation of your project."
        },

    {
            name: "Usage",
            type: "input",
            message: "How will your project be used?"
            },
            {
                name: "license",
                type: "input",
                message: "What license did you use on your project?"
                },
                {
                    name: "contributing",
                    type: "input",
                    message: "What are the contribution guidelines on your project?"
                    },
                    {
                        name: "tests",
                        type: "input",
                        message: "What tests did you include in your project?"
                        },
                        {
                            name: "email",
                            type: "input",
                            message: "What is your email?"
                            },
                            {
                                name: "github",
                                type: "input",
                                message: "What is your GitHub link?"
                                },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Making README...");
        writeToFile("./README.md", generateMarkdown({...responses}));
    })
}

// Function call to initialize app
init();

