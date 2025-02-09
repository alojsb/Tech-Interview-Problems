import { countSetBits } from '../../problems/index.js';

test('check if countSetBits function works correctly', () => {

  expect(countSetBits(5)).toBe(2);
  expect(countSetBits(10)).toBe(2);
  expect(countSetBits(11)).toBe(3);
  expect(countSetBits(15)).toBe(4);
  expect(countSetBits(16)).toBe(1);
  expect(countSetBits(17)).toBe(2);
  expect(countSetBits(26)).toBe(3);
  expect(countSetBits(27)).toBe(4);
});
