export function swapTwoLetters(letter1, letter2) {
  let char1 = letter1.charCodeAt(0);
  let char2 = letter2.charCodeAt(0);

  char1 = char1 ^ char2;
  char2 = char2 ^ char1;
  char1 = char1 ^ char2;

  return [String.fromCharCode(char1),String.fromCharCode(char2)];
}

// manual testing
//console.log(swapTwoLetters('a','b'));
