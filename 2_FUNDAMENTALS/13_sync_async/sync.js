const fs = require('fs')

console.log('Begin')

fs.writeFileSync('file.txt', 'Hi')

console.log('The end')