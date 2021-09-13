"use strict";
const number = document.querySelector(".number");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highScore");

let ULTIMATE_NUMBER = Number.parseInt(Math.random() * 20 + 1).toString();
let highScoreValue = 0;
let scoreValue = 20;
again.addEventListener("click", () => {
  message.textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  guess.value = "";
  scoreValue = 20;
  score.textContent = scoreValue;
  number.textContent = "?";
  ULTIMATE_NUMBER = Number.parseInt(Math.random() * 20 + 1).toString();
  console.log(ULTIMATE_NUMBER);
});

function correctAnser() {
  document.querySelector("body").style.backgroundColor = "Green";
  message.textContent = "🎉 Congratulations You Won";
  number.textContent = ULTIMATE_NUMBER;
}
function wrongAnswer() {
  scoreValue -= 1;
  score.textContent = scoreValue;
}
check.addEventListener("click", () => {
  if (guess.value === ULTIMATE_NUMBER) {
    correctAnser();
  } else {
    if (guess.value > ULTIMATE_NUMBER) {
      message.textContent = "Guess Lower";
      wrongAnswer();
    } else if (guess.value < ULTIMATE_NUMBER) {
      message.textContent = "Guess Higher";
      wrongAnswer();
    }
  }
});
