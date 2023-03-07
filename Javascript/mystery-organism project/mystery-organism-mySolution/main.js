// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};
const newBase = returnRandBase();
//console.log(newBase);

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specieNum, dna) => {
  return {
    specieNum,
    dna,
    mutate (){
      let i = Math.floor(Math.random() * this.dna.length); //sets a random index 
      let randBase = newBase; //assign a random dna  base from the preset array of bases, to the variable randbase.
      while(this.dna[i] === randBase){ //the while condition checks if the content of dna[i] is same as the base stored in randbase.
        randBase = newBase; //if the while condition is met, we change the content of randbase to another randomly selected base.
      }
      this.dna[i] = randBase; //we alter the content of dna[i] to the new content of randbase
      return this.dna;
    },
    compareDNA(otherSpecimen){
      let count = 0;
      for (const n of this.dna){
        if (n === otherSpecimen[this.dna.indexOf(n)]){
          count++;
        }else{
          continue;
        }
      }
      let similaritiesPercentage = ((count / this.dna.length) * 100).toFixed(2);
      console.log(`Specimen #${this.specieNum} and #${otherSpecimen.specieNum} have ${similaritiesPercentage}% DNA in common.`);
      
    },
    willLikelySurvive(){
      let count = 0;
      for(let n of this.dna){
        if (n === "C" || n === "G"){
          count++
        }else{
          continue;
        }
      }
      if(((count / this.dna.length) * 100).toFixed(2) > 60.00){
        return true;
      }else {
        return false;
      }
    },
    //Returns a complement DNA strand
		complementStrand() {
			const complement = [];

			for (let i = 0; i < this.dna.length; i++) {
				switch (this.dna[i]) {
					case "A":
						complement.push("T");
						break;
					case "T":
						complement.push("A");
						break;
					case "C":
						complement.push("G");
						break;
					case "G":
						complement.push("C");
						break;
				}
			}

			return complement;
		}
  }
}
const studyArray = [];
let aequor;
let k = 0;

do {
	aequor = pAequorFactory(k + 1, mockUpStrand());

	if (aequor.willLikelySurvive() === true) {
		studyArray.push(aequor);
		k++;
	} else {
		continue;
	}
} while (k < 30);



/*
let spec1Arr = mockUpStrand();
//let spec2Arr = mockUpStrand()
let specimen1 = pAequorFactory(1, spec1Arr);
//let specimen2 = pAequorFactory(2, spec2Arr);
//specimen1.compareDNA(specimen2.dna);
console.log(specimen1);
console.log(specimen1.willLikelySurvive())

*/








