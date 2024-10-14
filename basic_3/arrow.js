// this keyword: current context ko refer



const user = {
    username: "jimit",
    price: 99,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
       // console.log(this)
        
    }
}

// user.welcomeMessage()
// user.username = "pdpu"
// user.welcomeMessage()

//console.log(this)
// in node env this keyword gives its default value which is empty parenthesis / object

// browser ke aandar object is Window object

//function chai(){
  //  let username = "jimit"
    //console.log(this.username) // this will give undefined
//}
//chai()

// the upper code gives many value run this 

const chai = () => {
    let username = "jimit"
    console.log(this)
}

chai()

// arrow funcion ke aandar it will give undefined op
/*
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))
*/

// implicit return
const addTwo = (num1,num2) => (num1 + num2)

const addThree = (num1,num2) => ({username: "jimit"})
console.log(addTwo(3,4))


