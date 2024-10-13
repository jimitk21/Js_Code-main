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


/*    Operations    */


let value = 3
let negValue = -value
console.log(negValue)


/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%2) */

let str1 = "hello"
let str2 = "jimit"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(true)
console.log(+true)
//console.log(true+) // This will throw error
console.log(+"") // op will be 0

let num1,num2, num3 

num1 = num2 = num3 = 2 + 3 //(This kind of coding is not preferred)

// prefix postfix
let gameCounter = 100
gameCounter++;
console.log(gameCounter) // op will be 101

++gameCounter;
console.log(gameCounter) 