// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

// Note : equality check == And comparision > < >= <= work differently , Comparision convert null to a number , treating as 0 . that's why null>=0 is true and null > 0 is false
console.log(null > 0);    // output : false
console.log(null == 0);   // output : false
console.log(null >=0);    // output : true

console.log(undefined > 0);    // output : false
console.log(undefined == 0);   // output : false
console.log(undefined >=0);    // output : false


// Strict check ===    (it check value as well as datatype strictly)
console.log("2" == 2);     // output : true
console.log("2" === 2);    // output : false
console.log(2 === 2);      // output : true


