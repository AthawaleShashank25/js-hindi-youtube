let score = "33abc"
console.log(typeof score);

let vlaueInNumber = Number(score)
console.log(typeof vlaueInNumber);
console.log(vlaueInNumber)

// "33" => 33
//"33abc" => NaN (Not a number)
// true => 1 ; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "shashank" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// ************************* Operations *****************************

let value = 3
let negvalue = -value
console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " shashank"
console.log(str1+str2);

// Complex conversion of string

console.log("1" + 2);
console.log(1+ "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);     // output : true
console.log(+true);    // output : 1

console.log(+"");      // output : 0


// prefix And postfix by Mdn

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

