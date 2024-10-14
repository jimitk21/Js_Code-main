// {} -> Scope

if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
}

// console.log(a) // This will throw error as block scope is not present
// console.log(b) // This will throw error as block scope is not present
console.log(c) // This will give op as 30
console.log(d) // This will give op as 40 which creates problem


/* Note:
here we compiling the code by node file.js so the story of scope is diffrent
while the story of the scope in the console of the  browser is diffrent
*/

// somewhat of Closure
// aandar ka function bahar ke function ko access kar sakta hai
function one(){
    const userName = "jimit"
    function two(){
        const website = "github"
        console.log(userName)
    }
    //console.log(website)
    two()
}

one()


if(true){
    const username = "jimit"
    if(username === "jimit"){
        const website = "youtube"
        console.log(username+website)
    }
   // console.log(website)
}
//console.log(username)


// Function
function addone(num){
    return num + 1
}
addone(5)


// Can be known as expression
const addTwo = function(num){
    return num + 2

}

addTwo(5)


// function cant be used before its declaration 
/* Note:

addone(5)
function addone(num){
    return num + 1
}
 the upper region will not give any error as it is not  store in any vairable

but

addTwo(5)
const addTwo = function(num){
    return num + 2

}
the above code will give error of not accessing 


This is also called Hoisting
*/
