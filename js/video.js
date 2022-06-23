//Controles del video en reproducción
const urlAPI = "./videos.json";

// const video = document.getElementById("video");
const videoContainer = document.querySelector(".video-player");
const play = document.getElementById("play");
const control = document.getElementById("control-range");
const backwardSeconds = document.getElementById("backwardSeconds");
const forwardSeconds = document.getElementById("forwardSeconds");
const fullScreen = document.getElementById("fullScreen");
const mute = document.getElementById("volume");
const controlVolume = document.getElementById("controlVolume");
let actualVolume = 1;
let onFullscreen = false;
let duration;


video.removeAttribute("controls");


vid = document.querySelector("video");
vid.src =`assets/${videos[videoActual]}`
vid.addEventListener("loadeddata", (event) => {
  duration = event.target.duration;
});

video.addEventListener("timeupdate", (event) => {
  const percentage = (event.target.currentTime / duration) * 100;
  control.value = percentage;
});

// Manipulación del tiempo del video
control.oninput = (event) => {
  vid.currentTime = (duration / 100) * event.target.value;
};

backwardSeconds.onclick = () => {
  vid.currentTime = vid.currentTime - 10;
};
forwardSeconds.onclick = () => {
  vid.currentTime = vid.currentTime + 10;
};

// Pantalla Completa
fullScreen.onclick = () => {
  if (onFullscreen) {
    onFullscreen = false;
    document.exitFullscreen();
  } else {
    onFullscreen = true;
    videoContainer.requestFullscreen();
  }
};

// Volumen
controlVolume.oninput = (event) => {
  if (vid.muted){
    vid.volume = 0
    
  } vid.muted = false;
  vid.volume = event.target.value / 100;
  actualVolume = vid.volume;

};

mute.onclick = () => {
  if (vid.muted) {
    vid.muted = false;
    vid.volume = actualVolume;
    controlVolume.value = actualVolume * 100;
    volume.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png"
  } else {
    vid.muted = true;
    controlVolume.value = 0;
    volume.src = "https://cdn-icons-png.flaticon.com/512/108/108146.png"
  }
};

// Play y Pausa
play.onclick = () => {
  if (vid.paused) {
    vid.play();
    document.getElementById("play").src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png"
  } else {
    vid.pause();
    document.getElementById("play").src="https://svgsilh.com/svg/1632434.svg"
  }
};

vid.onclick = () => {
  if (video.paused) {
    vid.play();
    document.getElementById("play").src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png"
  } else {
    vid.pause();
    document.getElementById("play").src="https://svgsilh.com/svg/1632434.svg"
  }
};
