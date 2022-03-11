// Class 
class Microphone {
  constructor(color = "black") {
    this.color = color;
    this.isOn = true;
  }

  toggleOnOff() {
    if (this.isOn) {
      console.log('off');
    } else {
      console.log('on');
    }
    this.isOn = !this.isOn;
  }
}


const microphone = new Microphone("white");
// console.log(microphone);
// microphone.toggleOnOff();
// microphone.toggleOnOff();
// microphone.toggleOnOff();
console.log(microphone.color.toUpperCase());