// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 14)
  let sumOfIntegers = 0;
  let sumOfLeft = 0;
  let sumOfRight = 0;
  for (let i = 0; i < A.length; i++) {
      sumOfIntegers += A[i];
  }

  for (let j = 0; j < A.length; j++) {
      sumOfRight = sumOfIntegers - (sumOfLeft + A[j]);
      if (sumOfLeft === sumOfRight) {
          return j;
      }

      sumOfLeft += A[j];
  }

  return sumOfLeft;
}

