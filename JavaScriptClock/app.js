setInterval(setClock, 1000);
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondsHand = document.querySelector(".second");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const HoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  rotateHand(secondsHand, secondsRatio);
  rotateHand(minuteHand, minutesRatio);
  rotateHand(hourHand, HoursRatio);
}
function rotateHand(hand, ratio) {
  hand.style.setProperty("--rotate", ratio * 360);
}
