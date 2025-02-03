export function fizzBuzz(n) {
  let output = '';
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      output += 'FizzBuzz\n';
    } else if (index % 3 === 0) {
      output += 'Fizz\n';
    } else if (index % 5 === 0) {
      output += 'Buzz\n';
    } else {
      output += index + '\n';
    }
  }
  // Remove the last newline character
  output = output.trim();
  return output + '\ndone';
}
