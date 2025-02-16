// Find the only non-repeating number in an array
export function findNonRepeatingNumber(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === 'number') {
      result ^= arr[i];
    } else {
      throw new TypeError('Array elements must be integers');
    }
  }

  // Check if the result is a character (ASCII) or an integer
  return result;
}


// manual testing
console.log(findNonRepeatingNumber([1,4,7,8,5,4,7,1,5]));
