import { twoSum } from '../../problems/index.js';

test('check if twoSum works correctly', () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Happy Path test
  expect(twoSum(arr, 11)).toEqual([5, 6]);
  expect(twoSum(arr, 16)).toEqual([7, 9]);

  // Failure Path test
  expect(twoSum(arr, 100)).toBeNull();
});
