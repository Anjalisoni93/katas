function openOrSenior(data){
  return data.map(([age, handicap]) => {
    if (age > 54 && handicap > 7) {
      return 'Senior';
    } else {
      return 'Open';
    }
  })
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']);