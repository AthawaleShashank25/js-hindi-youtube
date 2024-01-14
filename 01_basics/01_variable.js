const accountId = 162637
let accountEmail = "Shashank@gmail.com"
var accountPassword = "12635"
accountCity = "jaipur"
let accountState

// accountId = 2 // Not allowed

accountEmail = "Shank@gmail.com"
accountPassword = "2121423"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
prefer not to use var
because of issue in block scope and function scope
*/