let popupButton = document.querySelector(".btn");
let popup = document.querySelector(".popup");

popupButton.addEventListener("click",  () => {
    popup.classList.toggle("toggle-popup")
    console.log("clicked");
});
