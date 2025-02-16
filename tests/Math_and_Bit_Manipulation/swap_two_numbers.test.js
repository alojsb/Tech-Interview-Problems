import { swapTwoNumbers } from '../../problems/index.js';

test('check swapTwoNumbers', () => { 
  expect(swapTwoNumbers(25,5)).toStrictEqual([5,25]);
  expect(swapTwoNumbers(12,1)).toStrictEqual([1,12]);
  expect(swapTwoNumbers(-4,2)).toStrictEqual([2,-4]);
});

// to test individually
// npx jest -t "check swapTwoNumbers"