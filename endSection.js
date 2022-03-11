//Render end stats
const renderEndSection = () => {
  if (getActiveSection() == "endSection") {
    const gotchiName = getGotchiName();
    document.querySelector("#endSectionName").innerText = gotchiName;
  
    const birthTime = getTime("startTime");
    const deathTime = getTime("death");
    document.querySelector("#birthAndDeathDate").innerHTML = `${birthTime} - ${deathTime}`;
  
    const birthTimeSec = getTime("startTimeSec");
    const deathTimeSec = getTime("deathSec");
    document.querySelector("#timeAlive").innerText = `Time alive: ${Math.floor(deathTimeSec - birthTimeSec)} seconds`;
  }
}

renderEndSection();