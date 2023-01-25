const inquirer = require('inquirer')

inquirer.prompt([{
  name: 'p1', message: 'What is the first score?'
}, {
  name: 'p2', message: 'What is the second score?'
}]).then(answers => {
  console.log(answers)
  const average = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
  console.log(`The average is: ${average}`)
}).catch(err => console.log(err))