// Object Literal 
const microphone = {
  color: 'black',
  isOn: true,
  toggleOnOff: function () {
    if (microphone.isOn) {
      console.log('off');
    } else {
      console.log('on');
    }
    microphone.isOn = !microphone.isOn;
  },
};

console.log(microphone.color);
microphone.toggleOnOff();
microphone.toggleOnOff();