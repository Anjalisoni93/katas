function dominatingXorPairs(arr) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if ((arr[i] ^ arr[j]) > (arr[i] & arr[j])) {
              sum ++;
          }
      }
  }
  
  return sum;
}

console.log(dominatingXorPairs([4, 3, 5, 2]));

/* Given a string S, the task is to find minimum flips required to convert an initial binary string consisting of only zeroes to S where every flip of a character flips all succeeding characters as well. 
Examples */

function minFlips(target)
{
    let curr = '1';
    let count = 0;
    for(let i = 0; i < target.length; i++)
    {

       // If curr occurs in the final string
       if (target[i] == curr)
       {
           count++;

           // Switch curr to '0' if '1'
           // or vice-versa
           curr = String.fromCharCode(48 + (curr.charCodeAt() + 1) % 2);
       }
    }
    return count;
}
 
console.log(minFlips("011000"));


