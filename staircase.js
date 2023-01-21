/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function rightStaircase(n) {
  for (let i = 1; i <= n; i++) {

    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

function leftStaircase(n) {
  for (let i = 1; i <= n; i++) {

    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

function reverseRightStaircase(n) {
  for (let i = 0; i < n; i++) {

    console.log(' '.repeat(i) + '#'.repeat(n - i));
  }

  // Additional logic to solve the same challenge
  /* for (let i = n; i > 0; i--) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  } */
}

function reverseLeftStaircase(n) {
  for (let i = 0; i < n; i++) {

    console.log('#'.repeat(n - i) + ' '.repeat(i));
  }
   /*  for (let i = n; i > 0; i--) {
      console.log(' '.repeat(i) + ' '.repeat(n - i));
    }
  */
}

rightStaircase(4);
console.log('-----');
leftStaircase(4);
console.log('-----');
reverseRightStaircase(4);
console.log('-----');
reverseLeftStaircase(4);