import { isEven } from '../../problems/index.js';

test('Check if even', () => {
  expect(isEven(6)).toBe(true);
  expect(isEven(24)).toBe(true);
  expect(isEven(10)).toBe(true);
  expect(isEven(7)).toBe(false);
});
