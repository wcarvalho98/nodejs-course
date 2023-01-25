const chalk = require('chalk')

const score = 6

if(score >= 7) {
  console.log(chalk.green('Congratulations! You\'re approved!'))
} else {
  console.log(chalk.bgRed.white('You need to do the recuperation test!'))
}