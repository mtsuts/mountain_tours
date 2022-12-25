const popup = document.querySelector(".popup-button");
const close = document.querySelector(".close-button");
function openPopup() {
  popup.classList.remove("close-popup");
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.add("close-popup");
}
