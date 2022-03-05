//Get all sections
const sections = document.querySelectorAll("section");

const startSection = document.querySelector("#startSection");
const confirmationSection = document.querySelector("#confirmationSection");
const gameSection = document.querySelector("#gameSection");
const endSection = document.querySelector("#endSection");

//Hide all but active section
const hideSections = (activeSection) => {
  sections.forEach(section => {
    section.classList.add("hidden");
  });
  activeSection.classList.remove("hidden");
}