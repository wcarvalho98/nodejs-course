const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args['name']
const role = args['role']

console.log(name, role)

console.log(`The user is called by ${name} and work as ${role}`)