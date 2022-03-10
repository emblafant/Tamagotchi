//Render image and name
const renderImgNameConfirmationSection = () => {
  const gotchiTypeData = getGotchiType();
  const imgUrl = gotchiTypeData.happy;
  document.querySelector("#confirmationSectionImg").src = imgUrl;

  const gotchiName = getGotchiName();
  document.querySelector("#confirmationSectionName").innerText = gotchiName;
}

//Check if activesection is confirmation section and render 
const renderConfirmationSection = () => {
  if (getActiveSection() == "confirmationSection") {
    renderImgNameConfirmationSection();
  }
}
renderConfirmationSection();