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