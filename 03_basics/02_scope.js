//var c = 300          // Note : Not use var because it dose not follow scope

let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);      // Show Error (Reason : out of scope)

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);       // Show Error (Reason : out of scope)
}

// console.log(username);           // Show Error (Reason : out of scope)


// ++++++++++++++++++ interesting ++++++++++++++++++



console.log(addone(5))                // Not Show error
function addone(num){                 // Function ko bas declare kiye 
    return num + 1
}
console.log(addone(8))


//console.log(addTwo(5))              // Show error
const addTwo = function(num){         // Function ko declare karke varible mai store kar diye
    return num + 2
}
console.log(addTwo(5)) 