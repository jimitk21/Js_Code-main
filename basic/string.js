const name = "Jimit"
const repoCount = 7

// console.log(name + repoCount + " Value") This is outdated

// Modern Way also known as string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


const gameName = new String ('Valorant-Epic')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,4) // last index is not included
console.log(newString)

const anotherString = gameName.slice(-8,4) // last index is not included
console.log(anotherString)



const newStringOne = "    jimit     "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://jimit.com/jimit%21codes"
console.log(url.replace('%21','-'))

console.log(url.includes('jimit'))
console.log(url.includes('test'))

console.log(gameName.split('-'))