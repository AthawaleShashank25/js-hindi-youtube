// Dates

let myDate = new Date();
console.log(typeof myDate);            // output : object
console.log(myDate.toDateString());    // output : Wed Jan 17 2024
console.log(myDate.toLocaleString());   // output : 1/17/2024, 10:29:24 PM
console.log(myDate.toString());        // output : Wed Jan 17 2024 22:29:24 GMT+0000 (Coordinated Universal Time)


let myCreateDate1 = new Date(2023,0,23)
console.log(myCreateDate1.toDateString());   // output : Mon Jan 23 2023

let myCreateDate2 = new Date(2023, 0, 23, 5, 3,30)
console.log(myCreateDate2.toLocaleString());   // output : 1/23/2023, 5:03:00 AM

let myCreateDate3 = new Date("2024-01-18")
console.log(myCreateDate3.toDateString());     // output : Thu Jan 18 2024

let myCreateDate4 = new Date("01-18-2024")
console.log(myCreateDate4.toDateString());     // output : Thu Jan 18 2024

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate1.getTime());         // output : 1674432000000 (In mili sec)
console.log(Math.floor(Date.now()/1000));     //  output : 1705531633. (In sec)


let newDate = new Date();
console.log(newDate);             // output : 2024-01-17T22:51:52.564Z
console.log(newDate.getMonth() + 1);   // output : 1
console.log(newDate.getDay());         // output : 3


// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})