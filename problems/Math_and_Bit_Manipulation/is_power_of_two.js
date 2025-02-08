// Checks if integer is a power of two
export function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
