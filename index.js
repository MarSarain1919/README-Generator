const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is name of your README?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your README',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install this program?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How do you use this program?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the testing guidelines?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
      },
      {
        type: 'input',
        name: 'contact',
        message: 'What is your GitHub and email?',
      },
  ])
  .then((response) =>
    console.log(response));
    fs.writeFile('READMEpop.md', generateMarkdown(response), (err) => err ? console.log(err): console.log('Success'));