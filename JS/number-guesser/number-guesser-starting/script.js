let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Get random number
const generateTarget = () => random(1,9);

// Generates number between 1 and 9
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Find difference between guess and target, compare results
const compareGuesses = (humanGuess, compGuess, secretTarget) => {
    let humanDiff = Math.abs(secretTarget - humanGuess);
    let compDiff = Math.abs(secretTarget - compGuess);
    if (humanDiff > compDiff) {
        return false;
    } else if (humanDiff < compDiff ) {
        return true;
    } else {
        return true;
    }
}

const updateScore = (winner) => {
    switch (winner) {
        case 'human': 
            humanScore += 1;
            break;
        case 'computer':
            computerScore += 1;
            break;
    }
}

const advanceRound = () => currentRoundNumber += 1;


// Debugging
/* 
let hGuess = generateTarget();
let cGuess = generateTarget();
let target = generateTarget();

let win = compareGuesses(hGuess, cGuess, target);

console.log(`${win}, hguess ${hGuess} cguess ${cGuess} target ${target}`);
*/