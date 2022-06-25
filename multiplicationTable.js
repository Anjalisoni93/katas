const multiplicationTable = function(maxValue) {
  let multiply = '';

  for (let  i = 1; i <= maxValue; i++) {
    for (let  j = 1; j <= maxValue; j++) {
      multiply += ((i*j) + ' ');
    }
    multiply += "\n";
  }
  return multiply;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
