export function generatePrimes(n) {
  let primes = [];
  let num = 2;

  while (num <= n) {
    let isPrime = true;

    for (let divisior = 2; divisior <= Math.sqrt(num); divisior++) {
      if (num % divisior === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}


// manual testing
console.log(generatePrimes(8));
