// works with integers and ASCII characters
export function findOnlyNonRepeating(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length === 1) {
      // Convert character to ASCII value
      result ^= arr[i].charCodeAt(0);
    } else if (typeof arr[i] === 'number') {
      // Perform XOR directly on numbers
      result ^= arr[i];
    } else {
      throw new TypeError('Array elements must be single characters or integers');
    }
  }

  // Check if the result is a character (ASCII) or an integer
  return result >= 32 && result <= 126 ? String.fromCharCode(result) : result;
}


// manual testing
console.log(findOnlyNonRepeating([1,4,7,8,5,4,7,1,5]));
console.log(findOnlyNonRepeating(['a','b','h','t','b','t','h']));
