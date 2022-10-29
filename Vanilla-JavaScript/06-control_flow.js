/**
 * Control Flow
 * The control flow is the order in which the computer executes statements in a script.
 */


/**
 * Conditional Statements
 * conditional statement helps evaluate which piece of code is be executed based on a certain condition
 * Types of Conditionals
 * - if
 * - if...else
 * - if...else if...else
 * - nested if...else
 * - switch
 */

console.log('\nConditional Statements\n');

console.log('Evaluating 89 > 45 in if statement');
if (89 > 45) {
    console.log('Fizz');
}

console.log('\nEvaluating 23 >= 45 in if...else statement');
if (23 >= 45) {
    console.log('Fizz');
} else {
    console.log('Buzz');
}

console.log('\nEvaluating 23 >= 45, 44 >= 45 in if...else if...else statement');
if (23 >= 45) {
    console.log('Fizz');
} else if (44 >= 45) {
    console.log('Buzz');
} else {
    console.log('Pop');
}

console.log('\nEvaluating 56 > 9 inside 12 > 4 in nested if...else statement');
if (12 > 4) {
    if (56 > 9) {
        console.log('Fizz');
    }
}

let fruit = 'apple';
console.log('\nEvaluating fruit variable in switch statement');
switch (fruit) {
    case 'pen': {
        console.log('I have a pen');
        break;
    }
    case 'apple': {
        console.log('I have an apple');
        break;
    }
    case 'ppap': {
        console.log('Pen pineapple apple pen');
        break;
    }
    default: {
        console.log('No fruit');
        break;
    }
}

console.log('\n---------------------------\n');

/**
 * Looping Statements
 * Can repeat a task or a number of statements over and over a specified range for a give condition
 * Types of Looping
 * - for
 * - while
 * - do...while
 * - for...in
 * - for...of
 */

console.log('\nLooping Statements\n');

console.log('for loop statement');
for (let i = 0; i < 4; i++) {
    console.log('Number:', i);
}

console.log('\nwhile loop statement');
let count = 0;
while (count < 4) {
    count++;
    console.log('Current Count:', count);
}

console.log('\ndo...while loop statement');
count = 0;
do {
    console.log('Current Count:', count);
    count++;
} while (count < 4);


console.log('\nfor...in loop statement'); // iterating over objects
const person = {
    name: 'Kunal Keshan',
    college: 'SRMSIT',
    address: 'Chennai, Tamil Nadu.'
};
for (const key in person) {
    console.log(key, person[key]);
}

console.log('\nfor...of loop statement'); // iterating over arrays
const myArray = ['hi', true, 'master you'];
for (const value of myArray) {
    console.log(value);
}

console.log('\n---------------------------\n');

