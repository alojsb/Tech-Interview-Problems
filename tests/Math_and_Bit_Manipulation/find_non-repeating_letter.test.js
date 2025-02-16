import { findNonRepeatingLetter } from '../../problems/index.js';

test('check findOnlyNonRepeating', () => { 
  expect(findNonRepeatingLetter(['a','b','h','t','b','t','h'])).toBe('a');

  // negative tests
  // non-ASCII values
  expect(() => findNonRepeatingLetter(['ahoy','there','lil\'','fellow'])).toThrow(TypeError);
});

// to test individually
// npx jest -t "check findNonRepeatingLetter"
