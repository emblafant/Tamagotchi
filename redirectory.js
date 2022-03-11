//Get all sections
const sections = document.querySelectorAll("section");

const startSection = document.querySelector("#startSection");
const confirmationSection = document.querySelector("#confirmationSection");
const gameSection = document.querySelector("#gameSection");
const endSection = document.querySelector("#endSection");

//Hide all but active section
const hideSections = (activeSection) => {
  sections.forEach(section => {
    hide(section);
  });
  show(activeSection);
}

//--------Page navigation

//get current page
const checkCurrentPage = () => {
  if (getActiveSection() == null) {
    setActiveSection("startSection");
    hideSections(startSection);
  } else {
    const activeSection = getActiveSection();
    const element = document.getElementById(activeSection);
    hideSections(element);
  }
};
checkCurrentPage();

//Go to start section
const goToStartSection = () => {
  setActiveSection("startSection");
  hideSections(startSection);
}

//Go to confirmation section
const goToConfirmationSection = () => {
  setActiveSection("confirmationSection");
  hideSections(confirmationSection);
}

//Go to game section
const goToGameSection = () => {
  setActiveSection("gameSection");
  hideSections(gameSection);
}

//Go to end section
const goToEndSection = () => {
  setActiveSection("endSection");
  hideSections(endSection);
}