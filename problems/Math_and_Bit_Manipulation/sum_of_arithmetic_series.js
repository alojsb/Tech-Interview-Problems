// Sum of arithmetic series
export function sumOfArithmeticSeries(firstTerm, commonDifference, numberOfTerms) {
  return (numberOfTerms/2 * (2 * firstTerm + (numberOfTerms - 1) * commonDifference));
}

// Manual testing
console.log(sumOfArithmeticSeries(-4, 1.2, 100));
