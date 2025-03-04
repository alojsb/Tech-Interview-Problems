import { isPowerOfTwo } from '../../problems/index.js';

test('checks if a number is a power of two', () => {
  expect(isPowerOfTwo(1)).toBe(true);
  expect(isPowerOfTwo(2)).toBe(true);
  expect(isPowerOfTwo(16)).toBe(true);
  expect(isPowerOfTwo(3)).toBe(false);
});
