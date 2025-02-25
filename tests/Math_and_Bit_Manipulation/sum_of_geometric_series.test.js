import { sumOfGeometricSeries } from '../../problems/index.js';

test('check sumOfArithmeticSeries', () => { 
  expect(sumOfGeometricSeries(25, 1.1, 85)).toBe(824492.2574);
  expect(sumOfGeometricSeries(4, 1.5, 25)).toBe(202001.34635);
});
