// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// returns mutated base
// takes original base as argument to prevent redundant base 
const returnMutatedBase = (base) => {
  let mutatedDna = null
  switch (base) {
    case 'A':
      mutatedDna = ['T', 'C', 'G']
    case 'T':
      mutatedDna = ['A', 'C', 'G']
    case 'C':
      mutatedDna = ['A', 'T', 'G']
    case 'G':
      mutatedDna = ['A', 'T', 'C']
  }
  ret = mutatedDna[Math.floor(Math.random() * 3)]
  console.log(`base to change ${base} new base ${ret}`)
  return ret
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// returns array of 30 survivable p.a objects
const potentialSurvivors = () => {
  let ret = []
  let count = 0
  console.log('test')
  do {
    count++
    console.log(count)
    let temp = pAqueorFactory(count, mockUpStrand());
    if((temp.willLikelySurvive()) === true){
      console.log('will survive')
      ret.push(temp)
    }else{
      console.log('wont survive')
    }
  } while (ret.length < 30)
  return ret
}

// returns a P. Aqueor object
const pAqueorFactory = (specimentNum, dna) => {
  return {
    specimentNum: specimentNum,
    dna: dna,
    // selects a random base and mutates it
    mutate () {
      let randDnaIndex = Math.floor(Math.random() * 15);
      this.dna[randDnaIndex] = returnMutatedBase(this.dna[randDnaIndex])

    },
    // compare current p.a dna with passed p.a dna
    // compute how many bases are the same in the same index
    // returns nothing but prints the percentage of dna in common
    compareDna (otherPA) {
      let sameBase = 0
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === otherPA.dna[i]){
          sameBase++
        }
      }
      console.log(`Specimen ${this.specimentNum} and Specimen ${otherPA.specimentNum} have ${Math.round(100 * (sameBase / 15))}% DNA in common.`)
    },
    // returns true or false if object has 60% C or G bases
    willLikelySurvive() {
      let survivability = 0
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          survivability++
        }
      }
      if(Math.floor(100 * (survivability / 15) >= 60)){
        return true
      }else{
        return false
      }
    }
  }
}

console.log(potentialSurvivors())



