// lab1.js
const prompt = require("prompt");

// Start the prompt
prompt.start();

// Ask the user for their choice
prompt.get(["userSelection"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  let userSelection = result.userSelection.toUpperCase();

  // Generate computer selection using Math.random()
  let randomNumber = Math.random();
  let computerSelection = "";

  if (randomNumber <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNumber <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log(`User Selection: ${userSelection}`);
  console.log(`Computer Selection: ${computerSelection}`);

  // Determine winner
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins");
  } else if (
    (computerSelection === "ROCK" && userSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && userSelection === "ROCK") ||
    (computerSelection === "SCISSORS" && userSelection === "PAPER")
  ) {
    console.log("Computer Wins");
  } else {
    console.log("Invalid choice! Please enter ROCK, PAPER, or SCISSORS.");
  }
});
