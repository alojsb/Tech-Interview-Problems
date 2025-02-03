import { fizzBuzz } from '../../problems/index.js';

test('check if fizzBuzz function works correctly', () => {
  const expectedOutput = `1
2
Fizz
4
Buzz
Fizz
7
done`;
  expect(fizzBuzz(7)).toBe(expectedOutput);

  const expectedOutput_2 = `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
done`;
  expect(fizzBuzz(25)).toBe(expectedOutput_2);
});
