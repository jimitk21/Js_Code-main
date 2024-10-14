// To declare object
// Constructor --> Singleton object
// Object.create


// iteral --> not singleton object

// object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "jimit",
    age: 21,
    "full Name": "Jimit Karangia",
   // mySym: "mykey1", // Cant be used directly as symbol
    [mySym]: "mykey1", // to declare the symbol
    location : "gandhinagar",
    email: "test@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])

//console.log(JsUser.full Name) // This will give error
console.log(JsUser["full Name"])

console.log(JsUser[mySym]) // note it

JsUser.email = "jimit@gmail.com" // to update it

//Object.freeze(JsUser) // To lock it

JsUser.email = "jimit@yahoo.com" // this will not give error  but also not perform any operation too
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User. ${this.name}`)
}

console.log(JsUser.greeting) // op is undefined
console.log(JsUser.greeting()) 

console.log(JsUser.greeting()) 
console.log(JsUser.greetingTwo()) 

