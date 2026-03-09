const sounds = {
  a: "sounds/k1.wav",
  s: "sounds/k2.mp3",
  q: "sounds/k3.wav",
  w: "sounds/k4.wav",
  d: "sounds/k5.wav",
  f: "sounds/k6.wav",
  e: "sounds/k7.wav"
};

function playSound(key){

  if(sounds[key]){
    let audio = new Audio(sounds[key]);
    audio.play();
  }
}

document.addEventListener("keydown", function(event){

  let key = event.key.toLowerCase();
  playSound(key);

});

const pads = document.querySelectorAll(".pad");

pads.forEach(function(pad){

  pad.addEventListener("click", function(){

    let key = pad.dataset.key;
    playSound(key);

  });

});