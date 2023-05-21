const input = require("readline-sync");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  var min = input.questionInt("Enter the minimum number: ");
  var max = input.questionInt("Enter the maximum number: ");

  var randomNumber = getRandomNumber(min, max);
  var guess;
  var attempts = 0;

  do {
    guess = input.questionInt("Enter your guess: ");

    if (guess < randomNumber){
      console.log("Too low! Try again.");
    } 
    else if (guess > randomNumber){
      console.log("Too high! Try again.");
    }

    attempts++;
} 
while (guess !== randomNumber);

  console.log("Congratulations! You guessed the number " +randomNumber +" in " +attempts + " attempts.");
  var playAgain = readline.keyInYN("Do you want to play again? ");
  if (playAgain) {
    startGame();
  }
}

startGame();
