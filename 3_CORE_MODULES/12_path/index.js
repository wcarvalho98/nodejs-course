const path = require('path')

const customPath = '/documents/wilder/document1.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))