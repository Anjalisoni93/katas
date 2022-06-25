const sumLargestNumbers = function(data) {

  let largestSum = [0, 0];

  for (let i = 0; i < data.length; i++){
    if (data[i] > largestSum [0] && data[i] > largestSum [1]) {
      largestSum[0] = largestSum [1];
      largestSum[1] = data[i];
    } else if (data[i] > largestSum[0]) {
      largestSum[0] = data[i];
    } else {
      continue;
    }
  }

  return largestSum[0] + largestSum[1];

};

//console.log(sumLargestNumbers([1, 10]));
//console.log(sumLargestNumbers([1, 2, 3])); // Hey ...I'm in now  :)

console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

