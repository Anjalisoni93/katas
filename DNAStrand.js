function DNAStrand(dna) {
  let result = "";

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += "G";
    }
  }

  return result;
}

function DNAStrand (dna) {
  return dna.split('').map(i => {
    return {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    } [i]
  }).join('');
}

console.log(DNAStrand("AAAA"));
console.log(DNAStrand("ATTGC"));
console.log(DNAStrand("GTAT"));
