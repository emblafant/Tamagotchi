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

//Get current time and date
const getCurrentTime = () => {
  const current = new Date();
  return current.toLocaleString();
}

const getCurrentTimeSec = () => {
  const current = new Date();
  const sec = current.getTime() / 1000;
  return sec;
}
//Get current hour
const getHour = () => {
  const current = new Date();
  return current.getHours();
}

//Save current time and date to local storage
const setCurrentTime = (key, func) => {
  const currentTime = func;
  localStorage.setItem(key, JSON.stringify(currentTime));
}

//Get specific time from local storage
const getTime = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

//Hide and show
const hide = (element) => {
  element.classList.add("hidden");
}
const show = (element) => {
  element.classList.remove("hidden");
}


//Get all Icons in game section
const loveIcon = document.querySelector("#loveIcon");

const lonelyIcon = document.querySelector("#lonelyIcon");
const hungryIcon = document.querySelector("#hungryIcon");
const sickIcon = document.querySelector("#sickIcon");

const loveBtn = document.querySelector("#loveBtn");
const feedBtn = document.querySelector("#feedBtn");
const medicineBtn = document.querySelector("#medicineBtn");
const cleanBtn = document.querySelector("#cleanBtn");
