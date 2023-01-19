const popup = document.querySelector(".popup");
const close = document.querySelector(".close-button");
const burger = document.querySelector(".burger-content")
const buttonImage = document.querySelector(".burger img")
function openPopup() {
  popup.classList.remove("close-popup");
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.add("close-popup");
}

function showCloseBurger(){
  if(!burger.classList.contains("burger-open")){
    burger.classList.remove("burger-close")
    burger.classList.add("burger-open")
    buttonImage.setAttribute("src", "./images/icon_close.png")
  }else{
    burger.classList.remove("burger-open")
    burger.classList.add("burger-close")
    buttonImage.setAttribute("src", "./images/burger.svg")
  }
}

