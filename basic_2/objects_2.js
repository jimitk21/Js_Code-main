// Contructor

const appUser = new Object()
appUser.id = "123abc"
appUser.name = "jimit"
appUser.isLoggedIn = false

console.log(appUser) 

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"jimit",
            lastname:"karangia"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// console.log(obj3)

//object assign is static object
const obj3 = Object.assign({}, obj1,obj2) // adding {} is good practice
console.log(obj3)

// can also be done using the speading 
const obj4 = {...obj1,...obj2}
console.log(obj4)

const users =[
    {
        id:1,
        email: "jimit@test.com"
    }
]

console.log(appUser)
console.log(Object.keys(appUser)) // op is array
console.log(Object.values(appUser))
console.log(Object.entries(appUser))

console.log(appUser.hasOwnProperty('isLoggedin'))

// de structring of the objects

const course = {
    coursename: "js on github",
    price:"0",
    courseTeacher: "Jimit"
}
course.courseTeacher
const {courseTeacher} = course
console.log(courseTeacher)

// API in brief
// you can use the json formmatter and the randomuser me api 
