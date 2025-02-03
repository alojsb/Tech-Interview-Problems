import { isPowerOfTwo, isEven, fizzBuzz } from './problems/index.js';

console.log('Checking power of two:');
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(10)); // false

console.log('Checking if even:');
console.log(isEven(8)); // true
console.log(isEven(3)); // false

console.log('Running Fizz Buzz to number `25`:');
console.log(fizzBuzz(25));
