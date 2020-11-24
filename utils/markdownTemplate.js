const renderLicenseBadge = (license) => {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
};

const renderLicenseLink = (license) => {
  if (license !== 'None') {
    return (
      `\n  * [License](#license)\n`
    )
  }
  return ''
};

const renderLicenseSection = (license) => {
  if (license !== 'None') {
    return (
      `# License
      
This project is licensed under the ${license} license.`
    )
  }
  return ''
};

const markdownTemplate = (data) => {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Questions](#questions)

  

  ## Installation

  To install all necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`


  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}


  ## Contributing

  ${data.contributing}


  ## Tests

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  
  ## Questions

  If you have any questions about this repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}).

  `;
};

module.exports = markdownTemplate;