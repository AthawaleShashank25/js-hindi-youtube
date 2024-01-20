// Immediately Invoked Function Expressions (IIFE)

// Note : interview Que : Why iffe use ?  Ans : golbel scope ke polloution ko hatane ke liye iife ka use kiya jata hai


// Named IIFE
(function chai(){
   
    console.log(`DB CONNECTED`);
})();


// Unnamed IIFE without parameter
( () => {
    console.log(`DB CONNECTED TWO`);
} )();        // ; must use


// Unnamed IIFE with Parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Shashank');

