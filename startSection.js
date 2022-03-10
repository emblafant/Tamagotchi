//Get form information
const adoptionFormGetType = () => {
  const gotchi = document.querySelector('input[name="pickAGotchi"]:checked')?.value;
  return gotchi;
}

const adoptionFormGetName = () => {
  const name = document.querySelector("#gotchiName").value;
  return name;
}

//Save form info in local storage
const saveAdoptionFormToLocalStorage = () => {
  const gotchiTypeInput = adoptionFormGetType();
  const name = adoptionFormGetName();
  let gotchiType = "";

  gotchiTypeArr.forEach(type => {
    if (type.type == gotchiTypeInput) {
      gotchiType = type;
    }
  })

  localStorage.setItem("gotchiType", JSON.stringify(gotchiType));
  localStorage.setItem("gotchiName", JSON.stringify(name));
}