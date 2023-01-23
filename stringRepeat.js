/* Write a function to repeat the string for given number of times */

function stringRepeat(n, s) {
  if (n > 0) {
    return s.repeat(n);
  } else {
    return '';
  } 
 
}

console.log(stringRepeat(6, "I") );