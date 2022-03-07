//Get all sections
const sections = document.querySelectorAll("section");

const startSection = document.querySelector("#startSection");
const confirmationSection = document.querySelector("#confirmationSection");
const gameSection = document.querySelector("#gameSection");
const endSection = document.querySelector("#endSection");

//Set active section in local storage
const setActiveSection = (activeSection) => {
  localStorage.setItem("activeSection", JSON.stringify(activeSection));
}

//Get active section Local Storage
const getActiveSection = () => {
  const activeSection = JSON.parse(localStorage.getItem("activeSection"));
  return activeSection;
}

//Hide all but active section
const hideSections = (activeSection) => {
  sections.forEach(section => {
    section.classList.add("hidden");
  });
  activeSection.classList.remove("hidden");
}