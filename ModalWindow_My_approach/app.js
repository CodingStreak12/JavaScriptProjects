const modal = document.querySelectorAll(".modal");
const closeModal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  const modal_window = document.querySelector(".modal_window");
  modal_window.classList.toggle("modal_window_hidden");
};
const showOverlay = () => {
  overlay.classList.toggle("overlay_hidden");
};

const modalOverlayHandler = () => {
  showModal();
  showOverlay();
};

for (const modalElement of modal) {
  modalElement.addEventListener("click", modalOverlayHandler);
}
closeModal.addEventListener("click", modalOverlayHandler);
overlay.addEventListener("click", modalOverlayHandler);
