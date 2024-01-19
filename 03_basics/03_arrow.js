const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


//console.log(this);           // output : {}.   // but in browser ye line console.log(this); window show karta hai


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
//  chai()                       // output : undefined



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()                        // output : undefined


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()                        // output : {}



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) => ( num1 + num2 )      // Implicit return : i.e return keyword not use. only write value in parenthesis
//console.log(addTwo(3, 4))

//const addTwo = (num1, num2) => ({username: "hitesh"})    // In case of object use parentehesis otherwise output is indefined 
//console.log(addTwo(3, 4))




// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()