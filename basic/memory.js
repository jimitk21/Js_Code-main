// Stack (Primitive), Heap (Non Primitve)
// Stack -> Copy of Value
// Heap -> Reference

let myCollegeName = "pdpu" // Goes to Stack
let anotherCollegeName = myCollegeName
anotherCollegeName = "daiict"
console.log(myCollegeName)
console.log(anotherCollegeName)

let userOne = {
    email: "jimitk191@gmail.com",
    upi: "test@oksbi"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"


console.log(userOne.email)
console.log(userTwo.email)