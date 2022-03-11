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
  const loved = getMood("loved");
  const notHungry = getMood("notHungry");
  const notSick = getMood("notSick");
  const clean = getMood("clean");

  if (loved && notHungry && notSick) {
    return true;
  } else {
    return false;
  }
}

//Set if gotchi has or hasnt pooped in relation to their last feeding
const havePooped = (state) => {
  localStorage.setItem("havePooped", JSON.stringify(state));
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
}


//Set death
const dead = () => {
  setCurrentTime("death", getCurrentTime());
  setCurrentTime("deathSec", getCurrentTimeSec());
  goToEndSection();
  renderEndSection();
}


//Compare moods to enter next stage
//Check love
const checkLove = (currentTime) => {
  const lastLoved = getTime("lastLoved");
  const difference = currentTime - lastLoved;
  //See if difference is more than 6 hours (21600)
  if (difference >= 21600) {
    becameLonely();
    saveMood("loved", false);
    show(lonelyIcon);
  }
}
//Check loneliness
const checkLoneliness = (currentTime) => {
  const becameLonely = getTime("becameLonely");
  const difference = currentTime - becameLonely;
  //See if difference is more than 24 hours (86400);
  if (difference >= 86400) {
    dead();
  }
}

//Check hunger
const checkHunger = (currentTime) => {
  const lastFed = getTime("lastFed");
  const difference = currentTime - lastFed;
  //See if difference is more than 4 hours (14400)
  if (difference >= 14400) {
    becameHungry();
    saveMood("notHungry", false);
    show(hungryIcon);
  }
}
//Check hungry
const checkHungry = (currentTime) => {
  const becameHungry = getTime("becameHungry");
  const difference = currentTime - becameHungry;
  //See if differnce is mor than 24 hours (86400)
  if (difference >= 86400) {
    dead();
  }
}

//Check poop
const checkPoop = (currentTime) => {
  const lastFed = getTime("lastFed");
  const difference = currentTime - lastFed;
  //See if the difference is more than 2 hours (7200)
  if (difference >= 7200) {
    pooped();
    havePooped(true);
    saveMood("clean", false);
    show(document.querySelector("#poop"));
  }
}
//Check dirty
const checkClean = (currentTime) => {
  const pooped = getTime("pooped");
  const difference = currentTime - pooped;
  //See if the difference is more than 12 hours (43200)
  if (difference >= 43200) {
    becameSick();
    saveMood("notSick", false);
    show(sickIcon);
  }
}
//Check sick
const checkSick = (currentTime) => {
  const becameSick = getTime("becameSick");
  const difference = currentTime - becameSick;
  //See if the difference is more than 24 hours (86400)
  if (difference >= 86400) {
    dead();
  }
}


//Sleeping
//Check if asleep
const checkIfSleeping = (hour) => {
  if (hour < 22 && hour > 5) {
    document.body.classList.remove("sleeping");
    return false;
  } else {
    document.body.classList.add("sleeping")
    return true;
  }
}



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
    gameSectionRenderName();
    gameSectionRenderImage();

    const currentTime = getCurrentTimeSec();
    const currentHour = getHour();
    
    //Check if asleep
    const sleeping = checkIfSleeping(currentHour);
    if (sleeping) {
      return;
    }
    
    console.log(9);
    const loved = getMood("loved");
    if (loved) {
      checkLove(currentTime);
    } else {
      checkLoneliness(currentTime);
    }

    const notHungry = getMood("notHungry");
    if (notHungry) {
      checkHunger(currentTime);
    } else {
      checkHungry(currentTime);
    }

    const havePooped = JSON.parse(localStorage.getItem("havePooped"));
    const clean = getMood("clean");
    if (clean && !havePooped) {
      checkPoop(currentTime);
    }
    const notSick = getMood("notSick");
    if (!clean && notSick) {
      checkClean(currentTime);
    }
    if (!notSick) {
      checkSick(currentTime);
    }
}

setInterval(function(){
  if (getActiveSection() == "gameSection") {
    renderGameSection();
  }
}, 1000)

//Show heart
const showHeart = () => {
  show(loveIcon);
  setTimeout(() => {
    hide(loveIcon);
  }, 1000)
}

//Buttons
loveBtn.addEventListener("click", () => {
  saveMood("loved", true);
  lastLoved();
  localStorage.removeItem("becameLonely");
  hide(lonelyIcon);

  showHeart();
});

feedBtn.addEventListener("click", () => {
  saveMood("notHungry", true);
  lastFed();
  localStorage.removeItem("becameHungry");
  hide(hungryIcon);
  havePooped(false);

  showHeart();
})

medicineBtn.addEventListener("click", () => {
  saveMood("notSick", true);
  localStorage.removeItem("becameSick");
  hide(sickIcon);

  showHeart();
})

cleanBtn.addEventListener("click", () => {
  saveMood("clean", true);
  localStorage.removeItem("pooped");
  hide(document.querySelector("#poop"));

  showHeart();
})