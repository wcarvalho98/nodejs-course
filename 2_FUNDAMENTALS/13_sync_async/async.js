const fs = require('fs')

console.log('Begin')

fs.writeFile('file.txt', 'Hello', (err) => {
  setTimeout(() => {
    console.log('File created!')
  }, 1000)
})

console.log('The end')