const prompt = require("prompt-sync")()
// Input guesses number and we give clue to try and try till they get the right answer

// Generate a random number
// To create a random no from 1 to 100
const target = Math.round(Math.random() * 100)   // Math.random generates a random number between 0 to 1
//console.log(target)
// We add to the guesses anytime user makes a guess
let guesses = 0


// To repeat till the users guesses the right answer use the while loop
while(true) { // The true makes it infinite so you got to create a condition to get it false
//Keeping track of guesses
    guesses++
    const guess = Number(prompt("Guess the number (0-100:"))
// NOte the value return to guess is always a string 
if (guess > target){
    console.log("Your guesss is high")
} else if(guess < target){
    console.log("Your guess is low")
} else{
    console.log("You guessed it!")
    break// This exits the  closest internal loop
}
}

console.log("You guessed it in ",guesses,"tries")