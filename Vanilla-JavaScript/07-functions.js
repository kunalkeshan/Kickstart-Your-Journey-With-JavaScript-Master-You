/**
 * Functions
 * Functions help group together a group of statements and call them all together.
 * The group of statements usually have a common goal, i.e. a common function to serve
 */

/**
 * Different ways of creating functions in JavaScript.
 * - Using function keyword
 * - Function Expressions
 * - Arrow functions
 * - IIFE (Immediately Invoked Function Expression)
 */

/**
 * Using function Keyword
 */

console.log('\nUsing function keyword\n');

function sayMyName() {
    console.log("Hii, I'm Kunal");
}
sayMyName();

function giveMeANum() {
    return 10;
}
const myNum = giveMeANum();
console.log(myNum);

console.log('\n---------------------------\n');

/**
 * Function Expression
 */

console.log('\nFunction Expression\n');

const myFunc = function () {
    console.log("I'm in a function expression!");
}
myFunc();

const anotherFunc = myFunc;
anotherFunc();

console.log('\n---------------------------\n');

/**
 * Arrow Functions
 */

console.log('\nArrow Functions\n');

const arrowFunc = () => {
    console.log('Arrow functions are cool!');
}
arrowFunc();

console.log('\n---------------------------\n');

/**
 * IIFE (Immediately Invoked Function Expression)
 */

console.log('\nIIFE (Immediately Invoked Function Expression)\n');

(function () {
    console.log('This is an IIFE');
})();

(() => {
    console.log('This is another IIFE');
})();

console.log('\n---------------------------\n');
