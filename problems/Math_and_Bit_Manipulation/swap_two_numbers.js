// Swap two numbers without a temporary variable

export function swapTwoNumbers(num1, num2) {
  num1 = num1 ^ num2;
  num2 = num2 ^ num1; // num2 ^ num1 ^ num2 == num1
  num1 = num1 ^ num2; // num1 ^ num2 ^ num1 == num2

  return [num1, num2];
}


// Manual testing
// console.log(swapTwoNumbers(4,25));
// console.log(swapTwoNumbers(13,-7));
// console.log(swapTwoNumbers(1,12));
