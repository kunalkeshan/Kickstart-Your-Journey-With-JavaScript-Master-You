// Variables are container to store some type of data.
// You can later use that same container to access the data, make some change to it, or use it for 
// some other purpose.

// In JavaScript, we have 3 ways of declaring variables. 
// We use certain keywords (words given by the language itself) to declare variables

// var - let's you redeclare variables and change the content of the variable later.
// let  - does not allow variable to be redeclare and can change the content of the variable later.   
// const - needs to be declared at the time of initialization, once assigned cannot be changed.

// When you declare a variable, you initialize it as well.
// But not vice-versa, you can initialize a variable, without declaring it.

// Think of Initializing as making a box (box being the variable)
// And declaring as actually filling the contents of the box

// Initializing and declaring at the same time

var name = 'Kunal Keshan';
let college = 'SRMIST';
const age = 19;

console.log(name, college, age);

name = 'Jaswin Anand';
college = 'VIT';
// age = 20; // Will Throw an error

console.log(name, college, age);

// Initializing and declaring later

let address;

console.log(address); // undefined

address = 'Chennai, Tamil Nadu - 600123';

console.log(address);

// Trying to initialize a constant variable

// const country; // Will Throw an error
// country = 'India'
// console.log(country)
