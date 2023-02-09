function isSquare(n) {
  if (n < 0) {
    return false;
  }

  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }

  // Additional way 

 /*  if ((Math.sqrt(n) % 1) === 0) {
    return true;
  } else {
    return false;
  } */
}

console.log(isSquare(16));
console.log(isSquare(7));