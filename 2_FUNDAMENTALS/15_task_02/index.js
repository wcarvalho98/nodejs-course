const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([{
  name: 'q1', message: 'What is your name?'
}, {
  name: 'q2', message: 'What is your age?'
}]).then((answers) => {
  if (!answers.q1) {
    throw new Error('the name was wrongly passed!')
  }
  if (!answers.q2 || !Number.isInteger(answers.q2)) {
    throw new Error('the age was wrongly passed!')
  }

  console.log(chalk.bgYellow.black(`The name of user is ${answers.q1} and has ${answers.q2} years old!`))
}).catch((err) => {
  console.log(chalk.bgRed.white.bold(`An error occurred: ${err.message}`))
})