const fs = require('fs')

if (!fs.existsSync('./myfolder')) {
  console.log('Don\'t exists!')
  fs.mkdirSync('myfolder')
}

if (fs.existsSync('./myfolder')) {
  console.log('Exists!')
}