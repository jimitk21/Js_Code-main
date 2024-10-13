let score = "33abc" // here you can try by undefined,null,boolean

//const {score} = req.body 

console.log(typeof score)

console.log(typeof (score)) // As a method

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" can convert into 33
// "33abc" when converted it gives NaN
// when true it gives -> 1, when false it gives 0

let isLoggedIn = 1 // Put 0 -> false, 1 -> true, empty string -> false, string ->true

let booleanIsLoggedin = Boolean(isLoggedIn)
console.log(booleanIsLoggedin)

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)