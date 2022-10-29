/**
 * Operators are symbols that carry special operations, the different types of operators in javascript are,
 * - Arithmetic Operators
 * - Assignment Operators
 * - Comparison Operators
 * - Logical Operators
 * - Type Operators
 */

// Arithmetic Operators - do mathematical operations

console.log('\nArithmetic Operators\n');

console.log('Addition, 3441 + 923 =', 3441 + 923);

console.log('Subtraction, 8833 - 1343 =', 8833 - 1343);

console.log('Multiplication, 34 * 13 =', 34 * 13);

console.log('Division, 452345 / 42 =', 452345 / 42);

console.log('Exponentiation, 8**3 =', 8 ** 3); // 8^2

console.log('Modulus, 5%2 =', 5 % 2); // returns the remainder when 5 is divided with 2.

let i = 8;

console.log('Increment, ++i =', ++i);

console.log('Decrement, --i =', --i);

console.log('\n---------------------------\n');

// Assignment Operators - assigning values and do operations simultaneously

console.log('\Assignment Operators\n');

let num = 15;

console.log('num:', num);

console.log('num += 5 (num = num + 5):', num, num += 5);

console.log('num -= 2 (num = num - 2):', num, num -= 2);

console.log('num *= 4 (num = num * 4):', num, num *= 4);

console.log('num /= 2 (num = num /2):', num, num /= 2);

console.log('num %= 5 (num = num % 5):', num, num %= 5);

console.log('num **= 2 (num = num ** 2):', num, num **= 2);

console.log('\n---------------------------\n');

// Comparison Operators - compare the equality and strict type checking between two values

console.log('\Comparison Operators\n');

console.log('135 == \'135\'', 135 == '135'); // Compares the value and not the data type;

console.log("135 === '135'", 135 === '135'); // Strict comparison - compares the value and the data type

console.log('56 > 34', 56 > 34); // greater than

console.log('898 < 34123', 898 < 34123); // less than

console.log('45 >= 45', 45 >= 45); // greater than or equal to

console.log('69 <= 420', 69 <= 420); // Less than or equal to

console.log("45 > 7 ? 'Fizz' : 'Buzz'", 45 > 7 ? 'Fizz' : 'Buzz'); // Ternary operator

console.log('\n---------------------------\n');

// Logical Operators - Run logical comparison between different values

console.log('\nLogical Operators\n');

console.log('Logical And, true && false', true && false);

console.log('Logical Or, false || true', false || true);

console.log('Logical Not, !true', !true);

console.log('\n---------------------------\n');

// Type Operators - Used to check the type of a variable 

console.log('\Type Operators\n');

let data = 19;
let name = 'Kunal Keshan';

console.log('let data = 19', typeof data);
console.log("let name = 'Kunal Keshan'", typeof name);

console.log('\n---------------------------\n');
