import { flipAllBits } from '../../problems/index.js';

test('check if flipAllBits works as expected', () => { 
  expect(flipAllBits(99)).toBe(-100);
  expect(flipAllBits(-26)).toBe(25);
  expect(flipAllBits(0)).toBe(-1);

  // Negative tests
  // Non-integer values
  expect(() => flipAllBits(null)).toThrow(TypeError);
  expect(() => flipAllBits(undefined)).toThrow(TypeError);
  expect(() => flipAllBits('string')).toThrow(TypeError);
  expect(() => flipAllBits([])).toThrow(TypeError);
  expect(() => flipAllBits({})).toThrow(TypeError);
  expect(() => flipAllBits(3.1415)).toThrow(TypeError); // Floating point number
  
  // Extremely large numbers beyond 32-bit signed integer range
  // This should NOT throw but could behave unexpectedly
  expect(() => flipAllBits(Number.MAX_SAFE_INTEGER)).not.toThrow(); 
});