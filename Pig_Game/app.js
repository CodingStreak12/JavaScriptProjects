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
let currentScore = 0;
let active = 0;
const finalScore = [0, 0];

const rollDiceHandler = () => {
  const randomDiceNumber = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `./images/dice-${randomDiceNumber}.png`;
  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    document.getElementById(`current--${active}`).textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${active}`).textContent = currentScore;
    active = active === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
};
const holdButtonHandler = () => {
  finalScore[active] = currentScore;
  if (active == 0) {
    currentScore = 0;
    score0El.textContent = finalScore[active];
  } else {
    currentScore = 0;
    score1El.textContent = finalScore[active];
  }

  document.getElementById(`current--${active}`).textContent = currentScore;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  active = active === 0 ? 1 : 0;
};
btnHold.addEventListener("click", holdButtonHandler);
btnRollDice.addEventListener("click", rollDiceHandler);
