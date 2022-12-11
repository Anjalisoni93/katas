function longestStrInArray(arr) {
  let maxString = arr[0].length;
  let result = arr[0];

  for(let i = 0; i < arr.length; i++) {
    let newStr = arr[i].length;
    if (newStr > maxString) {
      result = arr[i];
      maxString = newStr;
    }
  }
  return result;
}

console.log(longestStrInArray(["an", "a", "anjali"]));
console.log(longestStrInArray(["ab", "ab", "ab"]));