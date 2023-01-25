const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('What is your favorite programming language? ', (language) => {
  if (language === 'Python') {
    console.log('It isn\'t a language!')
  } else {
    console.log(`My favorite programming language is ${language}`)
  }
  readline.close()
})