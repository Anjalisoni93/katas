const rps = (p1, p2) => {
  if (p1 === p2) {
    return `Draw!`;
  }

  const choices = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }

  if (choices[p1] === p2) {
    return `Player 1 won!`;
  } else {
    return `Player 2 won!`;
  }
};

console.log(rps('scissors', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'rock'));
console.log(rps('paper', 'scissors'));