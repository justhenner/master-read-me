// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return ''
  } else {
  return ![Badge]`(https://img.shields.io/badge/License-${license}-blue)`
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ''
  } else {
    return `https://choosealicense.com/licenses/${license}/`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ''
  } else {
    return `This application is covered under the ${license} license.`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}


  ## Description

  ${data.description}
  

  ## Table of Contents (Optional)

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)


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
  **Github Link** https://github.com/${data.userName}

  **Email** ${data.email}
`;

}
// exporting generateMarkdown
module.exports = generateMarkdown;

