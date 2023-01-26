const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, this is my first server with HTML</h1>')
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
  console.log(`To access the server use the follwing url: http://localhost:${port}`)
})