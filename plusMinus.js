/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 * Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

    0.400000
    0.400000
    0.200000
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
 /*  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let numberOfZeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers++;
    } else
      if (arr[i] < 0) {
        negativeNumbers++;
      } else
        if (arr[i] === 0) {
          numberOfZeros++;
        }
  } */

  let positiveNumbersArr = arr.filter((num) => num > 0);
  let negativeNumbersArr = arr.filter((num) => num < 0);
  let zeroArr = arr.filter((num) => num === 0);


  console.log((positiveNumbersArr.length / arr.length).toFixed(6));
  console.log((negativeNumbersArr.length / arr.length).toFixed(6));
  console.log((zeroArr.length / arr.length).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);


