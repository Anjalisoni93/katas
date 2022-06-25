const urlEncode = function(text) {
  let trim = text.trim();
  let String = ''
  for (i = 0; i < trim.length; i++) {
    switch (trim[i]) {
      case ' ':
        String += '%20';
        break;
      default:
        String += trim[i];
    } 
  }
  return String;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));