// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornChoice = document.getElementById('horn-select');
  const audioChoice = document.querySelector('audio')
  const playButton = document.querySelector("button");
  const volume = document.getElementById('volume');
  const confetti = new JSConfetti();

  //change the image when selecting different horns
  hornChoice.addEventListener('change',(event)=> {
    const img = document.querySelector('header~img');
    img.src = "assets/images/" + `${event.target.value}` + ".svg";
    audioChoice.src = "assets/audio/" + `${event.target.value}` + ".mp3"; 

  });

  //play audio
  playButton.addEventListener('click', (event)=>{
    if(hornChoice.value == 'select'){
      return;
    }
    else{
      if(hornChoice.value == 'party-horn'){
        confetti.addConfetti({confettiNumber: 1000, emojis: ['🎉','🎆'],});
      }
      audioChoice.play();
    }
  });

  //change volume
  volume.addEventListener('change', (event)=> {
    const vol =`${event.target.value}`; 
    audioChoice.volume = vol / 100.0;
    const img = document.querySelector('#volume-controls > img');
    if(vol == 0){
      img.src = "assets/icons/volume-level-0.svg";
    }
    else if(vol < 33){
      img.src = "assets/icons/volume-level-1.svg"; 
    }
    else if(vol < 67){
      img.src = "assets/icons/volume-level-2.svg";
    }
    else{
      img.src = "assets/icons/volume-level-3.svg";
    }
  });
}

