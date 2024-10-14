const myArr = [0,1,2,3,4,5]
console.log(myArr[0])
// resizable array
// 0 based indexing
// it makes shallow copy -> same reference point 
// can of different type elements
// non primitve
// collection of multiple element in single variable
// not associative

const myArr2 = new Array(1,2,3,4)

// Array method

myArr.push(6)
console.log(myArr)

myArr.pop() // remove the last element
console.log(myArr)

myArr.unshift(9) // Add into first element of the aray
console.log(myArr)

myArr.shift()
console.log(myArr) // Removes the first element

console.log(myArr.includes(9))  // op is boolean

console.log(myArr.indexOf(9))  // op is -1 as it does not exist

const newArr = myArr.join() // changes the dataypes into string
console.log(myArr) 
console.log(newArr) 
console.log(typeof myArr)  // op is object
console.log(typeof newArr)  // op is string

// slice , splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1) 

console.log("B", myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2) 
 // Splice Operation manipulates the original array while slice does not


