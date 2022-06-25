const camelCase = function(input) {
  return input.split(' ')
  // get rid of any extra spaces using trim
  .map(a => a.trim())
  // Convert first char to upper case for each word
  .map(a => a[0].toUpperCase() + a.substring(1))
  // Join all the strings back together
  .join("")
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));