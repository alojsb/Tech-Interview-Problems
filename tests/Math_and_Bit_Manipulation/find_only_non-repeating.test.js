import { findOnlyNonRepeating } from '../../problems/index.js';

test('check findOnlyNonRepeating', () => { 
  expect(findOnlyNonRepeating([7,8,9,3,4,7,3,9,8])).toBe(4);
  expect(findOnlyNonRepeating([1,2,3,2,1])).toBe(3);
  expect(findOnlyNonRepeating([78,55,22,25,22,78,55,43,16,16,43])).toBe(25);
  expect(findOnlyNonRepeating(['a','b','h','t','b','t','h'])).toBe('a');

  // negative tests
  // non-integer and non-ASCII values
  expect(() => findOnlyNonRepeating(['ahoy','there','lil\'','fellow'])).toThrow(TypeError);
});

// to test individually
// npx jest -t "check findOnlyNonRepeating"
