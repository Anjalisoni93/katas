/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr = [1, 3, 5, 7, 9]
The minimum sum is  and the maximum sum is . The function prints

16 24 */

function miniMaxSum(arr) {
  // Write your code here
  let sort = arr.sort((a, b) => a - b);
  let miniValue = 0;
  let maxValue = 0;

  for (let i = 0; i < sort.length; i++) {
      if (i < sort.length - 1) {
          miniValue = miniValue + sort[i];
      }
      if (i > 0) {
          maxValue = maxValue + sort[i];
      }
  }

  console.log(miniValue, maxValue);
}

miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([1, 2, 3, 4, 5]);