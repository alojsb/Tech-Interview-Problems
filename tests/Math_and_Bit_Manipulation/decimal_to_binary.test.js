import { decimalToBinary } from '../../problems/index.js';

test('check if decimalToBinary function works correctly', () => {

  expect(decimalToBinary(5)).toBe('101');
  expect(decimalToBinary(10)).toBe('1010');
  expect(decimalToBinary(11)).toBe('1011');
  expect(decimalToBinary(15)).toBe('1111');
  expect(decimalToBinary(16)).toBe('10000');
  expect(decimalToBinary(17)).toBe('10001');
  expect(decimalToBinary(26)).toBe('11010');
  expect(decimalToBinary(27)).toBe('11011');
});
