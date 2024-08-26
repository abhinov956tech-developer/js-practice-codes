const name = "Abhinov"
const repoCount = 12

// console.log(name + repoCount + " Value"); --Don't follow this style

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('abhinov-dutta-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = name.slice(-4, 7)
console.log(anotherString);

const newStringOne = "   abhinov    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Developer.com/dev20%hub"

console.log(url.replace('20%', '-'))

console.log(url.includes('Web3'))

console.log(gameName.split('-'));