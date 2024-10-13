const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)


console.log(balance.toString().length)
console.log(balance.toFixed(2)) // to get the precision value(decimal value)

const otherNumber = 23.89666

console.log(otherNumber.toPrecision(3))

const hundreds = 100000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))



/// ------- Maths Library--------------

console.log(Math)

console.log(Math.abs(-4))

console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(4,6,1,3,8,9))
console.log(Math.max(4,6,1,3,8,9))

console.log(Math.random()) // op is between 0-1
console.log((Math.random()*10) + 1)  // op is shift towards left
// +1 is added to avoid the if the value get 0.002

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max- min + 1 ) + min)) // Imp