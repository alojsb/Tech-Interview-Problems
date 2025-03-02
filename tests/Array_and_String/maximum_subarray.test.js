import { maximumSubarray } from '../../problems/index.js';

test('check maximumSubarray', () => { 
  expect(maximumSubarray([3, 2, -4, 8])).toBe(9);
  expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  expect(maximumSubarray([5, 4, -1, 7, 8])).toBe(23);
});

// To test individually
// npx jest -t "check maximumSubarray"
