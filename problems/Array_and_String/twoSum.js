// Find two numbers in an array that add up to a target sum
export function twoSum(inputArray, desiredSum) {
  let numMap = new Map(); // Stores numbers we’ve seen so far

  for (let i = 0; i < inputArray.length; i++) {
    let complement = desiredSum - inputArray[i];

    if (numMap.has(complement)) {
      return [complement, inputArray[i]]; // Found the pair
    }

    numMap.set(inputArray[i], i); // Store number in map
  }

  return null; // Return null if no pair is found
}
