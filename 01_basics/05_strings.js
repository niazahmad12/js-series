const name ="Ahmad"
const repoCount =50

//console.log(name + repoCount + " abc"); // this syntax is not best practice

// Template Strings use back-ticks (``) rather than the quotes ("") to define a string:
// The method is called string interpolation.
//console.log(` my name is ${name} and my repo count is ${repoCount}`);

const myNewName = new String("Shoaib")
/*console.log(myNewName)
console.log(myNewName[0]);
console.log(myNewName.__proto__);
console.log(myNewName.length);
console.log(myNewName.toUpperCase());
console.log(myNewName.charAt(2));
console.log(myNewName.indexOf('a'));*/

// substring
const subName = myNewName.substring(0,4)
//console.log(subName);

const sliceName = myNewName.slice(-6,4)
//console.log(sliceName);

const oneString ="   Ahmad.  "
//console.log(oneString)
//console.log(oneString.trim())

const url = "https://google.com/abc%20xyz"

//console.log(url.replace('%20','-'))
//console.log(url.includes('com'));

const thirdName ="Shoab Ahmad Khan"
console.log(thirdName.split(" "));

console.log(thirdName.blink());