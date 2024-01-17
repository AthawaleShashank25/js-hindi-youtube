const score = 400
console.log(score);          // output :  400

const balance = new Number(400)
console.log(balance);            // output : [Number: 400]

console.log(`integer converted into string  ${balance.toString()}`)  // output : "400"
console.log(balance.toString().length);  // output : 3
console.log(balance.toFixed(2));       // output : 400.00

const otherNumber = 1233.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());          // output : 1,000,000
console.log(hundreds.toLocaleString('en-IN'));   // output : 10,00,000

// +++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,2,6,8));
console.log(Math.max(4,2,6,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
