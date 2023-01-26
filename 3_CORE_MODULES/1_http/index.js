const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.write('Hello http :)')
  res.end()
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
  console.log(`To access the server use the follwing url: http://localhost:${port}`)
})