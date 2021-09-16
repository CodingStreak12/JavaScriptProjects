"use strict";

const dice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn-roll-dice");

const rollDiceHandler = () => {
  const randomDiceNumber = Math.trunc(Math.random() * 6 + 1);
  dice.src = `./images/dice-${randomDiceNumber}.png`;
};

console.dir(dice);
btnRollDice.addEventListener("click", rollDiceHandler);
