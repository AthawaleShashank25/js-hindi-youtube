/* Array IMP Point 

1) resizable
2)contain a mix of different data types.
3) zero-indexed
4) JavaScript array-copy operations create shallow copies.

// Shallow Copy : A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)
// Deep Copy :   A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)

*/

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj", "Hatim"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);      // output : 1

// Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);      // output : [0, 1, 2, 3, 4, 5, 6, 7]

myArr.pop()
console.log(myArr);     // output : [0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9)       // output : [9, 0, 1, 2, 3, 4, 5, 6]
console.log(myArr);

myArr.shift()         // output : [0, 1, 2, 3, 4, 5, 6]
console.log(myArr);

console.log(myArr.includes(34));    // output : false
console.log(myArr.indexOf(3));     // output : 3

const newArr = myArr.join()
console.log(myArr);              // output : [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);             // output : 0,1,2,3,4,5,6
console.log(typeof newArr); // join convert array into string

// slice And splice

console.log("A " ,myArr);        // output :  A [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)
console.log("B ", myArr);    // output :  B [ 0, 1, 2, 3, 4, 5, 6 ]
console.log(myn1);           // output :    [ 1, 2]

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);    // output :  C  [ 0, 4, 5, 6 ].   i.e 1,2,3 remove from original array but in slice not remove
console.log(myn2);          // output :  [ 1, 2, 3]            i.e 3 also include but in slice 3 not include