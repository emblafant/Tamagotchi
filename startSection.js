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
  const gotchi = adoptionFormGetType();
  const name = adoptionFormGetName();

  localStorage.setItem("gotchiType", JSON.stringify(gotchi));
  localStorage.setItem("gotchiName", JSON.stringify(name));
}