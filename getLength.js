// Find the length of the longest substring without repeating characters

const getLength = function (str) {
  let currentString = [];
  let finalLength = 0;

  for (let i = 0; i < str.length; i++) {
    const currentCharacterIndex = currentString.indexOf(str[i]);

    if (currentCharacterIndex !== -1) {
      currentString.splice(0, currentCharacterIndex + 1);
    }

    currentString.push(str[i]);

    finalLength = Math.max(finalLength, currentString.length);
  }

  return finalLength;
};

const str = "abbcabcefef";
console.log(getLength(str));