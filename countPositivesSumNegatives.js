function countPositivesSumNegatives(input) {
  let result = [];
  let positiveNum = 0;
  let negativeNum = 0;
  
  if (input.length) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positiveNum += 1;
      } else {
        negativeNum += negativeNum[i]
      }
    }
    result.push(positiveNum);
    result.push(negativeNum);
  }
  
  return result;
}
function countPositivesSumNegatives(input) {
  let positiveNum = 0;
  let negativeNum = 0;
  
 if (input === null || input.length < 1) {
   return [];
 }
  input.forEach(item => {
    if (item > 0){
      return positiveNum++;
    } else {
      return negativeNum += item;
    }
  });
  
  return [positiveNum, negativeNum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));