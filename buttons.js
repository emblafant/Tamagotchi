//----- Navigation buttons

//Start button (start section)
document.querySelector("#adoptForm").addEventListener("submit", (e) => {
  goToConfirmationSection();
  saveAdoptionFormToLocalStorage();
  renderConfirmationSection();
  e.preventDefault();
})

//Cancel button (confirmation section)
document.querySelector("#cancelBtn").addEventListener("click", () => {
  goToStartSection();
})

//Confirm button (confirmation section)
document.querySelector("#confirmBtn").addEventListener("click", () => {
  goToGameSection();

  setStartTime();
  setStartTimeSec();
  lastLoved();
  lastFed();

  saveMood("loved", true);
  saveMood("notHungry", true);
  saveMood("notSick", true);
  saveMood("clean", true);

  renderGameSection();
})

//Start over button (end section)
document.querySelector("#startOverBtn").addEventListener("click", () => {
  localStorage.clear();
  goToStartSection();
})