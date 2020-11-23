const markdownTemplate = (data) => {
  return `# ${data.projectTitle}

  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Questions](#questions)

  

  ## Installation

  To install all necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`


  ## Usage

  ${data.usage}


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