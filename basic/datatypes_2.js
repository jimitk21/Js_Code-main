//Primitive: call by value 
// 7  types: String, Number, Boolean, null, undefined, symbol(to make value unique), BigInt

// Reference type (Non primitive)
// Array, Objects, Functions


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:



let x = 10; // x is now a number

x = "Hello"; // x is now a string

x = true; // x is now a boolean

On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int

String name = "John"; // name is a variable of type String

JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId) // op will be false

// to use Bigint you can do const bigNum = 9999999999999n just add n at last

const heros = ["Shaktiman", "naagraj", "batman"] // Array

// Object
let myObj = {
    name: "Jimit",
    age: 21
}

const myFnx = function(){
    console.log("Hello World")
}



console.log(typeof myFnx) // return type object function
// return type of non primitive is always function