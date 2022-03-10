//Set active section in local storage
const setActiveSection = (activeSection) => {
  localStorage.setItem("activeSection", JSON.stringify(activeSection));
}

//Get active section Local Storage
const getActiveSection = () => {
  const activeSection = JSON.parse(localStorage.getItem("activeSection"));
  return activeSection;
}

//Get gotchi type data from local storage
const getGotchiType = () => {
  const gotchiTypeData = JSON.parse(localStorage.getItem("gotchiType"));
  return gotchiTypeData;
}

//Get gotchi name from local storage
const getGotchiName = () => {
  const gotchiName = JSON.parse(localStorage.getItem("gotchiName"));
  return gotchiName;
}

