// Note : Javascript is dynamically typed language And Typescript is statically Typed language
// Reason : In statically typed languages, the compiler catches type-related errors before the program runs leading to more reliable code. On the other hand, dynamically typed languages detect type issues at runtime, which might lead to unexpected type errors or behavior during execution.



// Primitive (Call by value)
// 7 types : String, Number, Boolean , null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
console.log(typeof score);      // output: number
console.log(typeof scoreValue); // output: number


const isLoggedIn = false;
console.log(typeof isLoggedIn); // output: boolean

let userEmail;
console.log(userEmail);         // output: undefined


const outsideTemp = null;
console.log(typeof outsideTemp);  // output: object



const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);     // output: false



const bigNumber = 3872893798739844n
console.log(typeof bigNumber);     // output: bigint




// Non permitive(Call by Reference)
// 3 Type : Array, Objects, Function

const heros = ["shaktiman","hatim","doga"];

let myObj ={
    name: "shashank",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack And Heap Memory In javascript

// premitive datatype - use Stack memory. (call by value)
let myYoutubename = "ShashankAthawaledot.com"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


// nom -premitive datatype - use Heap memory (call by reference)
let userOne ={
    email:"shashank@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Anamika@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);








