const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Please enter your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address'
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Please enter the name of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a brief description of your project'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using this repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];

const init = () => {
  inquirer
    .prompt(questions)
    .then(userResponses => console.log(userResponses))
    .catch(err => {
      if (err) {
        throw err;
      }
    });
};

init();