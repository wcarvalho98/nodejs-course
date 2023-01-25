// const x = '10'
const x = 10

// verify if x is a number
if (!Number.isInteger(x)) {
  throw new Error('The value of x is not a integer number')
}

console.log('Code keeps runing...')