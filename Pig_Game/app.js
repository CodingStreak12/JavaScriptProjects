"use strict";

const diceEl = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const btnRollDice = document.querySelector(".btn-roll-dice");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnHold = document.querySelector(".btn-hold");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const btnNewGame = document.querySelector(".btn-new");
let currentScore, active, isPlaying, finalScore;

const init = () => {
  currentScore = 0;
  finalScore = [0, 0];
  diceEl.classList.remove("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  active = 0;
  isPlaying = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};
init();
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${active}`).textContent = currentScore;
  active = active === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
const rollDiceHandler = () => {
  if (isPlaying) {
    const randomDiceNumber = Math.trunc(Math.random() * 6 + 1);
    diceEl.src = `./images/dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
      currentScore += randomDiceNumber;
      document.getElementById(`current--${active}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
};
const holdButtonHandler = () => {
  if (isPlaying) {
    finalScore[active] += currentScore;
    document.getElementById(`score--${active}`).textContent =
      finalScore[active];
    if (finalScore[active] >= 100) {
      isPlaying = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${active}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
};

btnNewGame.addEventListener("click", init);
btnHold.addEventListener("click", holdButtonHandler);
btnRollDice.addEventListener("click", rollDiceHandler);
