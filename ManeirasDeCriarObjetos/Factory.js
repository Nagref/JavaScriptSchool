// Factory 
function createMicrophone(color = 'black') {
  let isOn = true;

  function toggleOnOff() {
    if (isOn) {
      console.log('off');
    } else {
      console.log('on');
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