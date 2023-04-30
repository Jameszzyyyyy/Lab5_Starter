// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // Declare objects
  const synth = window.speechSynthesis;
  const voice = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const faceImg = document.querySelector('img');
  let voiceList = [];
  
  // Populate selection area
  setTimeout(() => {
    voiceList = synth.getVoices();
    for (let i = 0; i < voiceList.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      if (voiceList[i].default){
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voiceList[i].lang);
      option.setAttribute('data-name', voiceList[i].name);
      voice.appendChild(option);
    }
  }, 1000);

  // Speak in voice
  playButton.addEventListener('click', (event) => {
    const text = new SpeechSynthesisUtterance(textBox.value);
    const selectedVoice = voice.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voiceList.length ; i++) {
      if (voiceList[i].name === selectedVoice){
        text.voice = voiceList[i];
        break;
      }
    }
    faceImg.src = "assets/images/smiling-open.png";

    synth.speak(text);
    let exitInterval = setInterval(function () {
      if(!synth.speaking) {
        faceImg.src = "assets/images/smiling.png";
        clearInterval(exitInterval);
      }
    }, 100);
  });
}