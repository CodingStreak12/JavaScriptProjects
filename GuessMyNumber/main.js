"use strict";
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

let ULTIMATE_NUMBER = Number.parseInt(Math.random() * 20 + 1);
let highScoreValue = 0;
let scoreValue = 20;
again.addEventListener("click", () => {
  message.textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
  scoreValue = 20;
  score.textContent = scoreValue;
  number.textContent = "?";
  ULTIMATE_NUMBER = Number.parseInt(Math.random() * 20 + 1);
});

function correctAnser() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  message.textContent = "🎉 Congratulations You Won";
  number.textContent = ULTIMATE_NUMBER;
  if (scoreValue > highScoreValue) {
    highScoreValue = scoreValue;
    highScore.textContent = highScoreValue;
  }
}
function wrongAnswer() {
  scoreValue -= 1;
  score.textContent = scoreValue;
}

check.addEventListener("click", () => {
  if (Number.parseInt(guess.value) === ULTIMATE_NUMBER) {
    correctAnser();
    return;
  } else if (scoreValue > 1) {
    if (Number.parseInt(guess.value) > ULTIMATE_NUMBER) {
      message.textContent = "Guess Lower";
      wrongAnswer();
    } else if (Number.parseInt(guess.value) < ULTIMATE_NUMBER) {
      message.textContent = "Guess Higher";
      wrongAnswer();
    }
  } else {
    message.textContent = "You Lost";
    score.textContent = "0";
    return;
  }
});
