const path = require('path')

// absolute path
console.log(path.resolve('test.txt'))

// create path
const midFolder = 'documents'
const fileName = 'document1.txt'

const finalPath = path.join('/', 'files', midFolder, fileName)

console.log(finalPath)