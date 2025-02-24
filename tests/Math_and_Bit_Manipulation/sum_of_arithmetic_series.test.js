import { sumOfArithmeticSeries } from '../../problems/index.js';

test('check sumOfArithmeticSeries', () => { 
  expect(sumOfArithmeticSeries(25, 5, 85)).toBe(19975);
  expect(sumOfArithmeticSeries(12, 1, 86)).toBe(4687);
});