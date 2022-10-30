/**
 * Function Arguments
 * Functions can be even more useful when we can pass in arguments (values) into them.
 */

// Function with Parameters
function sum(a, b) {
    const total = a + b;
    return total;
}

// A shorter version of the above expression
// function sum(a,b){
//     return a+b;
// }

// Function with parameters that have a default value
// function sum(a=0, b=0){
//     return a+b;
// }

// Arrow function with parameters that have a default value
// const sum = (a=0,b=0) => a+b;

console.log(sum(23, 17));
