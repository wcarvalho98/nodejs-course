// concat variables in one console
const x = 10
const y = 'Jhon'
const z = [1, 2]

console.log(x, y, z)

// count of impressions
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)

// variable after string
console.log('The name is %s, and he is a programmer', y)

// clear console
setTimeout(() => {
  console.clear()
}, 2000)