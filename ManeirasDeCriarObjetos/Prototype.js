// Prototype 
function Microphone(color = "black") {
  this.color = color;
  this.isOn = true;
}


Microphone.prototype.toggleOnOff = () => {
  if (this.isOn) {
    console.log('off');
  } else {
    console.log('on');
  }
  this.isOn = !this.isOn;
};

const microphone = new Microphone();
const microphone2 = new Microphone("white");

console.log(microphone);
console.log(microphone2);

microphone2.toggleOnOff();
microphone2.toggleOnOff();
microphone2.toggleOnOff();
microphone2.toggleOnOff();

