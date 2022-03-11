//Get and set moods local storage
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


//Set Mood times
//Reset love
const lastLoved = () => {
  setCurrentTime("lastLoved", getCurrentTimeSec());
}
//Set loneliness time
const becameLonely = () => {
  setCurrentTime("becameLonely", getCurrentTimeSec());
}
//Reset hunger
const lastFed = () => {
  setCurrentTime("lastFed", getCurrentTimeSec());
}
//Set hungry time
const becameHungry = () => {
  setCurrentTime("becameHungry", getCurrentTimeSec());
}
//Set poop time (still uncleaned)
const pooped = () => {
  setCurrentTime("pooped", getCurrentTimeSec());
}
//Set sick time
const becameSick = () => {
  setCurrentTime("becameSick", getCurrentTimeSec());



//Compare moods to enter next stage
//Check hunger
const checkHunger = () => {
  const notHungry = getMood("notHungry");
  const lastFed = getTime("lastFed");
  const currentTime = getCurrentTimeSec();
  const difference = currentTime - lastFed;
  //See if difference is more than two hours
  if (notHungry) {
    if (difference >= 7200) {
      becameHungry();
      saveMood("notHungry", false);
    }
  }
}

const




//Render game
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
    gameSectionRenderImage();

    checkHunger();
  }
}

setInterval(function(){
  renderGameSection();
}, 1000)