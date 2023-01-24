/* Write a  function to abbreviate two words with their initials sperated by . */

function abbreviateWords(name) {
  let initialChar = name.split(" ");
  let finalChar = initialChar.map((a) => a[0].toUpperCase()).join(".");

  return finalChar;
}

console.log(abbreviateWords('Anjali Soni'));
console.log(abbreviateWords('jigar soni'));
