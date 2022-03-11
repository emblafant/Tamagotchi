//Reset love
const lastLoved = () => {
  setCurrentTime("lastLoved", getCurrentTimeSec());
}
//Reset hunger
const lastFed = () => {
  setCurrentTime("lastFed", getCurrentTimeSec());
}
//Set sick countdown
const becameSick = () => {
  setCurrentTime("becameSick", getCurrentTimeSec());
}

//Set moods in local storage
const saveMood = (mood, state) => {
  localStorage.setItem(mood, JSON.stringify(state));
}

//Get mood from local storage
const getMood = (mood) => {
  return JSON.parse(localStorage.getItem(mood));
}

//Render gotchi name
const gameSectionRenderName = () => {
  const gotchiName = getGotchiName();
  document.querySelector("#gameSectionName").innerText = gotchiName;
}

//Check if activesection is game section and render 
const renderGameSection = () => {
  if (getActiveSection() == "gameSection") {
    gameSectionRenderName();
  }
}

renderGameSection();