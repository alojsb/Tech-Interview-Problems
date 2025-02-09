export function decimalToBinary(num) {
  let binary = '';

  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }

  return binary || '0'; // Ensure 0 is handled correctly
}

// console.log(decimalToBinary(26)); // Output: "11010"
// console.log(decimalToBinary(27)); // Output: "11011"
// console.log(decimalToBinary(16)); // Output: "10000"
