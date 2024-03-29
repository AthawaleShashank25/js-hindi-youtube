// const tinderUser = new Object()      // it is a singelton object
const tinderUser = {}        // It is non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 //console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
 console.log(tinderUser);

// console.log(Object.keys(tinderUser));      // return keys of object in array
// console.log(Object.values(tinderUser));   // return value of object in array
//console.log(Object.entries(tinderUser));     // return key-value pair in an array
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // return boolean value





// Object de-Structure

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}



const {courseInstructor: instructor} = course
console.log(course.courseInstructor)
// console.log(courseInstructor);
console.log(instructor);




// JSON API Intro

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[
    {},
    {},
    {}
]
