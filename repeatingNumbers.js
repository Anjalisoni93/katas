const repeatNumbers = function(data) {
  let values = [];

  for (let i = 0; i < data.length; i++) {
    let number = '';

    for (let j = 0; j < data[i][1]; j++) {
      number += data[i][0];
    }
    values.push(number);
  }

  return values.join(',');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));