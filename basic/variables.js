const accountId = 191   // Cant be changed
let emailId = "jimit@test.com"
var emailPassword = "12345"
accountCity = "Gandhinagar" // This is not good practice
let accountState 

//accountId = 123  // This is not possible
console.log(accountId)

// var : block scope problem
/*
Variables and Data Types
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/


emailId = "pdpu@test.com"
emailPassword = "54321"
accountCity = "Bhavnagar"

console.table([ accountId, emailId, emailPassword, accountCity, accountState])