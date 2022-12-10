const conditionalSum = function (values, condition) {
  let number = 0;

  for (let value = 0; value < values.length; value++) {
    if (values[value] % 2 === 0 && condition === 'even') {
      number += values[value];
    } else

      if (values[value] % 2 !== 0 && condition === 'odd') {
        number += values[value];
      }
  }

  return number;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd")); 
