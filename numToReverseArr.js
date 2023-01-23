/* Write a function to convert array to reversed array of digits */

function digitize(n) {
  //code here
      let arr = String(n).split("").reverse().map(Number);
      return arr;
}

console.log(digitize(54321));
console.log(digitize(34567));