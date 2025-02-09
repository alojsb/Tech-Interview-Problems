// Count the number of set bits (Hamming Weight)
export function countSetBits(num) {
  let counter = 0;
  while (num > 0) {
    counter += num % 2;
    num = Math.floor(num / 2);
  }

  return counter;
}


console.log(countSetBits(26)); // Output: 3
console.log(countSetBits(27)); // Output: 4
console.log(countSetBits(16)); // Output: 1
