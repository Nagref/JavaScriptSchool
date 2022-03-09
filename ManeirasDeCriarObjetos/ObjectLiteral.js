// Object Literal 
const microphone = {
  color: 'black',
  isOn: true,
  toggleOnOff: function () {
    if (microphone.isOn) {
      console.log('desligar');
    } else {
      console.log('ligar');
    }
    microphone.isOn = !microphone.isOn;
  },
};

console.log(microphone.color);
microphone.toggleOnOff();
microphone.toggleOnOff();