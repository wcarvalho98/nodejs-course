const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  const urlInfo = require('url').parse(req.url, true)
  const name = urlInfo.query.name

  if (name) {
    const nameNewLine = name + ',\r\n'
    fs.appendFile('file.txt', nameNewLine, (err, data) => {
      res.writeHead(302, {
        Location: '/',
      })
      return res.end()
    })
  } else {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write(data)
      return res.end()
    })
  }
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
  console.log(`To access the server use the follwing url: http://localhost:${port}`)
})