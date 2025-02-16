import { swapTwoLetters } from '../../problems/index.js';

test('check swapTwoNumbers', () => { 
  expect(swapTwoLetters('a','b')).toStrictEqual(['b','a']);
  expect(swapTwoLetters('h','a')).toStrictEqual(['a','h']);
  expect(swapTwoLetters('t','m')).toStrictEqual(['m','t']);
});

// to test individually
// npx jest -t "check swapTwoLetters"