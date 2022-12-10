// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.


const sumOfArrayPlusOne = function (arr) {
  let result = arr.length;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sumOfArrayPlusOne([2, 3, 6]));