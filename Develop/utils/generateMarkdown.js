// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
    return "";
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } 
  if (license === "GPL_3.0") {
    return "https://opensource.org/licenses/GPL-3.0";
  }
  if (license === "Apache_2.o") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "BSD_3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  if (license === "None") {
    return ""
  }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "MIT Licensed";
  } 
  if (license === "GPL_3.0") {
    return "GPL 3.0 Licensed";
  }
  if (license === "Apache_2.o") {
    return "Apache 2.0 Licensed";
  }
  if (license === "BSD_3") {
    return "BSD 3 Licensed";
  }
  if (license === "None") {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at ${data.email} or check out my GitHub ${data.github}.
`;
}

export default generateMarkdown;
