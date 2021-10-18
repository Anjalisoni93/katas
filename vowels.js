const numberOfVowels = function(data) {
  let vowels = 0;
  var string = data.toString();

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
      vowels += 1;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));