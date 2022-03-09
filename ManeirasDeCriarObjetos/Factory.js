// Factory 
function createMicrophone(color = 'black') {
  let isOn = true;

  function toggleOnOff() {
    if (isOn) {
      console.log('desligar');
    } else {
      console.log('ligar');
    }
    isOn = !isOn;
  }
  return { color, isOn, toggleOnOff };
}
const microphoneBlack = createMicrophone();
// const microphoneWhite = createMicrophone("white");
// console.log(microphoneBlack.color);
// console.log(microphoneWhite.color);
console.log(microphoneBlack);