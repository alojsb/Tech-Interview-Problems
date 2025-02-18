import {generatePrimes} from './generate_primes.js';

// Computes the prime factorization of a number, 
// returning a dictionary of prime factors and their exponents

export function primeFactorization(n) {
  const primes = generatePrimes(n);
  let num = n;
  let factorCounts = {};
  let index = 0;
  
  while (index < primes.length) {
    let counter = 0;

    while (num % primes[index] === 0) {
      num /= primes[index];
      counter++;
    }

    if (counter > 0) {
      factorCounts[primes[index]] = counter;
    }

    if (num <= 1) {
      break;
    }
    index++;
  }

  return factorCounts;
}

// Format into a more readable representation
export function primeFactorizationFormatted(n) {
  const factors = primeFactorization(n);

  return Object.entries(factors)
    .map(([prime, exponent]) => `${prime}^${exponent}`)
    .join(' * ');
}


// 🛠 Manual Testing (formatted)
// console.log(primeFactorizationFormatted(10)); // "2^1 * 5^1"
// console.log(primeFactorizationFormatted(12)); // "2^2 * 3^1"
// console.log(primeFactorizationFormatted(30)); // "2^1 * 3^1 * 5^1"

// Manual testing (raw)
// console.log(primeFactorization(10));
// console.log(primeFactorization(12));
// console.log(primeFactorization(1985));
