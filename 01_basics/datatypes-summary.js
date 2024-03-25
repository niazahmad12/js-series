// there are two types of datatype primitive and none primitive
// this type categorize on the base of call by value and call be reference

//1- Primitive (all primitive datatypes are call by value)
// its means you are not directly change in values instead we changing in copy

// 7 types: String, Number, Boolean, null, undefined, BigInt, Symbol (use to make unique)

//Note: Javascript is static type or dynamically type
//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them
// in Javascript its not ncessary to define datatype when declare variables 
// when we declare variables then datatype set 
//const score =100; 


// Javascript is Dynamic Type language

//2- Reference (Non primitive) 

// Array, Objects, Functions,

 const score = 100 // number
 const scoreValue = 100.3 // number
 const isLoggedIn = false // boolean 
 const outsideTemp = null //dataype:object (not zero, not empty, its completely empty)
 let userEmail; // if not assign value then its datatype is undefined
const id = Symbol('123'); // unique value
//console.log(id);
const anotherId = Symbol('123');
//console.log(anotherId);

//console.log(id === anotherId); // false

const bigNumber = 347787878878722n

const heros = ["Hazrat Umar RA","Hazrat Abu Bakar RA"];
//ojbects
let myObj = {
name:"niaz",
age:22,
}

const myFunction = function(){
    console.log("Hello World");
}

// find datatype of any variable
//console.log(typeof outsideTemp ); // object
//console.log(typeof outsideTemp); // symbol
//console.log(typeof myFunction); // function object
//console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ****************MEMEORY**************************

// Stack (Primitive) , Heap (Non-Primitive)
// 1- Stack (Primitive) provide copy of variable not directly change
// example
let myName = "Aslam Bhati" 
let myOtherName = myName
myName = "Akram Bhati"
console.log(myOtherName)

// 2- Heap (Non-Promitive)
// example

let userOne = {
    name:"Ahmad",
    id: "abc",
    email: "test@gmail.com"
}

let userTwo = userOne
userTwo.email="new@gmail.com"

console.log(userOne);
console.log(userTwo);
