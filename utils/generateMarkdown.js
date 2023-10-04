function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any questions about the repo, open an issue or contact ${data.username} directly at ${data.email}.
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
