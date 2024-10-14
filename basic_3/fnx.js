
function myName(){

console.log("J")
console.log("I")
console.log("M")
console.log("I")
console.log("T")

}

myName() // myname: reference, (): execution

function addTwoNumbers(num1,num2){
   console.log(num1 + num2) //num1,num2 are called paramters
}
addTwoNumbers(4,5) //this value passing are called arguments
addTwoNumbers(4,"5")

const result = addTwoNumbers(6,5)
//console.log("result:",result) // its op will be undefined

function addTwoNumbers1(number1,number2){
    let result = number1 + number2
    return result

    // return number1 + number2
}
addTwoNumbers1(9,6)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter the user name")
        return
    }
 return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage(""))
console.log(loginUserMessage("jimit"))


// now we have a case where we dont know how many parameters are to be passed
// ... is called rest operator also spread operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2,500,600))

const user ={
    username: "jimit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)

handleObject({
    username:"jimit",
    price: 499
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myNewArray))
