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

//Check if any mood is bad
const checkGoodMood = () => {
  const happy = getMood("happy");
  const notHungry = getMood("notHungry");
  const notSick = getMood("notSick");
  const clean = getMood("clean");

  if (happy && notHungry && notSick && clean) {
    return true;
  } else {
    return false;
  }
}

//Render gotchi name
const gameSectionRenderName = () => {
  const gotchiName = getGotchiName();
  document.querySelector("#gameSectionName").innerText = gotchiName;
}

//Render gotchi image
const gameSectionRenderImage = () => {
  const happy = checkGoodMood();
  const gotchiImg = document.querySelector("#gameSectionGotchi");
  const gotchiData = getGotchiType();
  if (happy) {
    gotchiImg.src = gotchiData.happy;
  } else {
    gotchiImg.src = gotchiData.sad;
  }
}

//Check if activesection is game section and render 
const renderGameSection = () => {
  if (getActiveSection() == "gameSection") {
    gameSectionRenderName();

    //updates everysecond
    setInterval(function(){
      gameSectionRenderImage();
    }, 1000)
  }
}

renderGameSection();