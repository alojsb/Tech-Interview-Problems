import { primeFactorization, primeFactorizationFormatted } from '../../problems/index.js';

test('check primeFactorization', () => { 
  expect(primeFactorization(99)).toStrictEqual({3: 2, 11: 1});
});

test('check primeFactorizationFormatted', () => { 
  expect(primeFactorizationFormatted(18)).toStrictEqual('2^1 * 3^2');
});

// To test individually
// npx jest -t "check primeFactorization"
// npx jest -t "check primeFactorizationFormatted"
