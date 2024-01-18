// object using constructor (Singleton)

// object using literals 

const mySym1 = Symbol("key1")
const mySym2 = Symbol("key2")

const Jsuser = {

    name:"Shashank",
    "full name": "Shashank Athawale",
    mySym1: "myKey1",          // incorrect Syntax
    [mySym2]:"myKey2",         // correct Syntax
    age : 20,
    location: "Jaipur",
    email: "Shashank@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
// console.log(Jsuser.full name)      // Wrong Syntax
console.log(Jsuser["full name"]) 
console.log(Jsuser.mySym1) 
console.log(typeof Jsuser.mySym1) 
console.log(Jsuser[mySym2]) 
console.log(Jsuser)


Jsuser.email= "Anuj@gmail.com"      // updation 

//Object.freeze(Jsuser)
//Jsuser.email= " Shashank@gmail.com"     // not update because we freeze email by using Object.freeze() function
//console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("Hello Js user");
}

console.log(Jsuser.greeting)   // output : [Function (anonymous)]  i.e function execute nhi hua hai uska reference aaya hai
console.log(Jsuser.greeting())   // output : Hello Js user

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user ${this.name}`);
}

console.log(Jsuser.greetingTwo())