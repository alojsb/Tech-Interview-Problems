import { generatePrimes } from '../../problems/index.js';

test('check generatePrimes', () => {

  expect(generatePrimes(8)).toStrictEqual([2,3,5,7]);
  expect(generatePrimes(18)).toStrictEqual([2,3,5,7,11,13,17]);
});
