/** In JavaScript, there are two types of Data 
 * - Primitive Data Type
 *  - number
 *  - string
 *  - boolean
 *  - null
 *  - undefined
 *  - symbols
 * - Derived Data Type
 *  - objects
 *      - arrays (a type of object in javascript)
*/

// Numbers - are declared using numbers, can range from negative to positive 
// depending on the use case

console.log('\nNumbers\n'); // Using escape characters - \n to print in new line

let myNum = 10;
const tenRaise2 = myNum ** 2; // We'll take a look at operators in the next module
console.log('myNum:', myNum);
console.log('tenRaise2:', tenRaise2);

console.log('\n---------------------------\n');

// Strings - are declared using "", '', or ``. A string is basically a collection (array) of 
// individual characters

console.log('\nStrings\n');

let myStr = 'This is a string in single quotes';
const name = "Kunal Keshan";
const address = "Chennai, Tamil Nadu.";

console.log('myStr:', myStr);
console.log('name:', name);
console.log('address', address);

// Templating using ``. We can generate a string whose value is variable 
// ie - its value depends on other variables 

const concatenated = name + " lives in " + address;
const templated = `${name} lives in ${address}`;

console.log('concatenated:', concatenated);
console.log('templated:', templated);

console.log('\n---------------------------\n');

// Booleans - data type that represents the truthy or falsy nature of a value

console.log('\nBooleans\n');

const trueBool = true;
const falseBool = false;

console.log('trueBool:', trueBool);
console.log('falseBool:', falseBool);

console.log('\n---------------------------\n');

// Null and Undefined
/**
 * Null - the variable is initialized but its value does not exist.
 * Undefined - indicates that something hasn't been declared yet.
 */

console.log('\nNull and Undefined\n');

let someUnDeclaredValue = null;;
let myArray = [1, 2, 3]

console.log('null:', someUnDeclaredValue);
console.log('undefined:', myArray[3]); // Trying to access a index element that does not exists yet

console.log('\n---------------------------\n');

// Symbols - they are immutable data types (ie. they cannot be changed)

console.log('\nSymbols\n');

const id = Symbol("id"); // useful when object keys need to stay permanent

console.log('id:', id);

console.log('\n---------------------------\n');

// Objects - collection of unordered key: value pairs, they can be of any data type

console.log('\nObjects\n');

const person = {
    name: 'Kunal Keshan',
    college: 'SRMSIT',
    address: 'Chennai, Tamil Nadu.'
};

console.log('person object:', person);
console.log('name:', person.name);
console.log('college:', person['college']);

console.log('\n---------------------------\n');

// Arrays - In JavaScript, arrays are a type of object, whose key: value pairs are ordered.

console.log('\nArrays\n')

const myArr = ['hi', 23, true, 'master you']; // the first element has index 0 and second has index 2 and so on
// is same as
/**
 * const myArr = {
 *  0: 'hi',
 *  1: 23,
 *  2: true,
 *  3: 'master you'
 * }
 */

console.log('myArr:', myArr);
console.log(myArr[1]);

console.log('\n---------------------------\n');
