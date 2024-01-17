const name = "shashank"
const repoCount = 50
console.log("hello my name is" + name + "and my repo count is" + repoCount);  // not use this type of syntax (old school)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);   // use backtick for concatination (good practice for industry)


const gameName = new String("shashank-harish-athawale")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "     shashank.     "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shashank.com/shashank%20athawale"
console.log(url.replace('%20','-'));

console.log(url.includes('shashank'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));
