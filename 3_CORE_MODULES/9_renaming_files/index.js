const fs = require('fs')

const previousFile = 'file.txt'
const newFile = 'new_file.txt'

fs.rename(previousFile, newFile, (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('File renamed!')
})