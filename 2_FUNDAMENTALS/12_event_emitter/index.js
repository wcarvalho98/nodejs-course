const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('While')
})

console.log('Before')

eventEmitter.emit('start')

console.log('After')