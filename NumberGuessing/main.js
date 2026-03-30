let randomNumber = Math.floor(Math.random() * 10) + 1;

let guessInput = document.querySelector("#guessInput");
let checkBtn = document.querySelector("#checkBtn");
let resetBtn = document.querySelector("#resetBtn");
let message = document.querySelector("#message");

checkBtn.addEventListener("click", function () {
  let userGuess = Number(guessInput.value);

  if (userGuess === 0 || userGuess > 10) {
    message.textContent = "Please enter a number between 1 and 10";
  } 
  else if (userGuess === randomNumber) {
    message.textContent = "Correct! You guessed the number.";
  } 
  else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } 
  else {
    message.textContent = "Too low! Try again.";
  }
});

resetBtn.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  guessInput.value = "";
  message.textContent = "Game reset. Start guessing...";
});
