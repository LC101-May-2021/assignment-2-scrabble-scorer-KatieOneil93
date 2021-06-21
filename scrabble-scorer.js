// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(wordToScore) {
  word = word.toUpperCase();
	let letterPoints = 0

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
      letterPoints = letterPoints += Number(pointValue)

		 }
    
 
	  }
	}
	return console.log(`Score for ${word}: ${letterPoints}`);
 }

// don't change the names or your program won't work as expected. //
let word = ""

function initialPrompt() {
   word = input.question("Let's play some scrabble! \nEnter a word to score: ");
   return word;
};

// console.log(oldScrabbleScorer(initialPrompt()))

function simpleScore(wordToScore){
  word = word.toUpperCase();
	score = 0
	  for (let i = 0; i < word.length; i++) {
      score++
    }
	return console.log(`Score for ${word}: ${score}`);
 }

// console.log(simpleScore())

function vowelBonusScore(wordToScore){
  word = word.toUpperCase();
  letterPoints = 0
  let vowelBonusPoints= ['A', 'E', 'I', 'O', 'U']
  
    for (let i = 0; i < word.length; i++) {
  if(vowelBonusPoints.includes(word[i])){
    letterPoints+=3
  }
  else{
    letterPoints+=1
  }

    }
      return console.log(`Score of ${word}: ${letterPoints}`)

}

// console.log(vowelBonusScore())

function scrabbleScore(wordToScore){
  word = word.toUpperCase();
  letterPoints = 0
  for (let i = 0; i < word.length; i++){
    if ((word[i]) in newPointStructure) {
//  console.log(newPointStructure[word[i]])
letterPoints += newPointStructure[word[i]] 

  }
  }
  return console.log(`Score for ${word}: ${letterPoints}`);
}

const scoringAlgorithms = [
 {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  scoreFunction:'A function with a parameter for user input that returns a score.'
},
{
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  scoreFunction:'A function that returns a score based on the number of vowels and consonants.'
},
{
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  scoreFunction:'Uses scrabble point system.'
}
];


function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?");
  console.log('0 - Simple:', scoringAlgorithms[0].description);
  console.log('1 - Vowel Bonus:', scoringAlgorithms[1].description);
  console.log('2 - Scrabble:', scoringAlgorithms[2].description);
  selectedScoringAlgorithm = input.question("Enter 0, 1, or 2: ");
// while (selectedScoringAlgorithm != `0`||`1`||`2`)
    if (selectedScoringAlgorithm === `0`){
      return console.log(simpleScore());
    }
    if (selectedScoringAlgorithm === `1`){
      return console.log(vowelBonusScore());
    }
    if (selectedScoringAlgorithm === `2`){
      return console.log(scrabbleScore());
    }
    else {
      selectedScoringAlgorithm = input.question(`Please enter the number 0, 1, or 2 to selsect a scoring algorithm.`)
    }
}

function transform(oldPointStructure) {
let newPointStructure ={}
for (let letters in oldPointStructure){
  for(let i = 0; i < oldPointStructure[letters].length; i++){
  newPointStructure[oldPointStructure[letters][i]]= Number(letters)
  }
}
return newPointStructure
};


let newPointStructure =
transform(oldPointStructure)

// console.log(newPointStructure)
function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

