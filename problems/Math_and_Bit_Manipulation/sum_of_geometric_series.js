// Sum of geometric series with special handling for r = 1
// Sum of geometric series with proper rounding
export function sumOfGeometricSeries(firstTerm, commonRatio, numberOfTerms) {
  if (commonRatio === 1) {
    return parseFloat((firstTerm * numberOfTerms).toFixed(5)); // Special case
  }

  const sum = (firstTerm * (1 - Math.pow(commonRatio, numberOfTerms))) / (1 - commonRatio);

  return parseFloat(sum.toFixed(5)); // Rounding to 5 decimals
}


// Manual testing
// console.log(sumOfGeometricSeries(12, 1, 86));  // Output: 12 * 86 = 1032
// console.log(sumOfGeometricSeries(2, 3, 4));    // Output: 2(1 - 3^4)/(1 - 3) = 80
// console.log(sumOfGeometricSeries(5, 0.5, 6));  // Output: 9.6875
