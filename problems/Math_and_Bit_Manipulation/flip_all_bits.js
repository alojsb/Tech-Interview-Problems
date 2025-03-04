// Flips all bits of a given integer

export function flipAllBits(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new TypeError('flipAllBits only accepts integers!');
  }

  return ~n;
}


// Manual testing
// console.log(flipAllBits('strinf'));
// console.log(flipAllBits(1));
// console.log(flipAllBits(-26));
