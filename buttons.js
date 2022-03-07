//----- Navigation buttons

//Start button (start section)
document.querySelector("#adoptForm").addEventListener("submit", (e) => {
  goToConfirmationSection();
  e.preventDefault();
})

//Cancel button (confirmation section)
document.querySelector("#cancelBtn").addEventListener("click", () => {
  goToStartSection();
})

//Confirm button (confirmation section)
document.querySelector("#confirmBtn").addEventListener("click", () => {
  goToGameSection();
})

//Start over button (end section)
document.querySelector("#startOverBtn").addEventListener("click", () => {
  goToStartSection();
})