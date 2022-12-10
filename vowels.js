const numberOfVowels = function(data) {
  // let vowels = 0;
  // var string = data.toString();

  // for (let i = 0; i < string.length; i++) {
  //   if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
  //     vowels += 1;
  //   }
  // } 
  // return vowels;
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let char of data.toLowerCase()) {
    if (vowels.includes(char)) 
      count++;
  }
  return count;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));