/* Write a function to repeat the string for given number of times */

function stringRepeat(n, s) {
  if (n > 0) {
    return s.repeat(n);
  } else {
    return '';
  }
  /*  var str = "";
   for (var i = 0; i < n; i++)
     str += s;
   return str; */
}

console.log(stringRepeat(6, "I"));