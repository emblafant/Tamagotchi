//Get all sections
const sections = document.querySelectorAll("section");

//Hide all but active section
const hideSections = (activeSection) => {
  sections.forEach(section => {
    section.classList.add("hidden");
  });
  activeSection.classList.remove("hidden");
}