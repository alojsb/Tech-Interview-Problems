// Find the subarray with the maximum sum (Kadane's Algorithm)
export function maximumSubarray(arr) {
  let res = 0;
  let maxEnd = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEnd = Math.max(maxEnd + arr[i], arr[i]);
    res = Math.max(res, maxEnd);
  }

  return res;
}

// Manual testing
console.log(maximumSubarray([-4, 2, 7]));     // 9
console.log(maximumSubarray([5, 2, -3, 4]));  // 8
console.log(maximumSubarray([1, 2, -5]));     // 3
