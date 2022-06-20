//Controles del video en reproducción
const video = document.getElementById("video");
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

video.addEventListener("loadeddata", (event) => {
  duration = event.target.duration;
});

video.addEventListener("timeupdate", (event) => {
  const percentage = (event.target.currentTime / duration) * 100;
  control.value = percentage;
});

// Manipulación del tiempo del video
control.oninput = (event) => {
  video.currentTime = (duration / 100) * event.target.value;
};

backwardSeconds.onclick = () => {
  video.currentTime = video.currentTime - 10;
};
forwardSeconds.onclick = () => {
  video.currentTime = video.currentTime + 10;
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
  if (video.muted) video.muted = false;
  video.volume = event.target.value / 100;
  actualVolume = video.volume;
};

mute.onclick = () => {
  if (video.muted) {
    video.muted = false;
    video.volume = actualVolume;
    controlVolume.value = actualVolume * 100;
  } else {
    video.muted = true;
    controlVolume.value = 0;
  }
};

// Play y Pausa
play.onclick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

video.onclick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
