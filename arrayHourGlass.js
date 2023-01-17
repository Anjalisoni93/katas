/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

/*Example
const arr =[ -9 -9 -9  1 1 1 
              0 -9  0  4 3 2
              -9 -9 -9  1 2 3
              0  0  8  6 6 0
              0  0  0 -2 0 0
              0  0  1  2 4 0]

 The  hourglass sums are:
-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18

The highest hourglass sum is  from the hourglass beginning at row , column :
0 4 3
  1
8 6 6
*/



function hourglassSum(arr) {
  let maxOfSum = null;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      const sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      if (sum > maxOfSum || maxOfSum === null) {
        maxOfSum = sum;
      }
    }
  }
  return maxOfSum;
}

const arr =[ [-9, -9, -9,  1, 1, 1], 
              [0, -9,  0,  4, 3, 2],
              [-9, -9, -9,  1, 2, 3],
              [0, 0, 8,  6, 6, 0],
              [0,  0,  0, -2, 0, 0],
              [0,  0,  1,  2, 4, 0 ]]

// const arr = [[-1, -1, 0, -9, -2, -2],
//               [-2, -1, -6, -8, -2, -5],
//               [-1, -1, -1, -2, -3, -4],
//               [-1, -9, -2, -4, -4, -5],
//               [-7, -3, -3, -2, -9, -9],
//               [-1, -3, -1, -2, -4, -5]]

console.log(hourglassSum(arr));
