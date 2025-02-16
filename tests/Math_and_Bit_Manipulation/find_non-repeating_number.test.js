import { findNonRepeatingNumber } from '../../problems/index.js';

test('check findOnlyNonRepeating', () => { 
  expect(findNonRepeatingNumber([7,8,9,3,4,7,3,9,8])).toBe(4);
  expect(findNonRepeatingNumber([1,2,3,2,1])).toBe(3);
  expect(findNonRepeatingNumber([78,55,22,25,22,78,55,43,16,16,43])).toBe(25);

  // negative tests
  // non-integer values
  expect(() => findNonRepeatingNumber(['ahoy','there','lil\'','fellow'])).toThrow(TypeError);
});

// to test individually
// npx jest -t "check findNonRepeatingNumber"
