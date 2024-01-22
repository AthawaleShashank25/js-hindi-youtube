// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 22, 33, 4, 5]

for (const num of arr) {      // for of loop in array
    console.log(num);        // this line gives index as output but in for of loop this line gives value as output 
}

const greetings = "Hello world!"
for (const greet of greetings) {          // for of loop in string
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}




// Note : object ke liye forof loop nhi lagta

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }