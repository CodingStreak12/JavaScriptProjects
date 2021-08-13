const menuIcon = document.querySelector(".hamburger-menu");
const hamburgerLines = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
  hamburgerLines.classList.toggle("change");
});
