// Find the only non-repeating letter in an array
export function findNonRepeatingLetter(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length === 1) {
      // Convert character to ASCII value
      result ^= arr[i].charCodeAt(0);
    } else {
      throw new TypeError('Array elements must be single characters');
    }
  }

  // Check if the result is a character (ASCII) or an integer
  return String.fromCharCode(result);
}


// manual testing
console.log(findNonRepeatingLetter(['a','b','h','t','b','t','h']));
