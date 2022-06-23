//Controles del video en reproducción

const video = document.getElementById("video");
const videoContainer = document.querySelector(".video-player");

const play = document.getElementById("play");
const playIcon = document.getElementById("play");
const control = document.getElementById("control-range");
const backwardSeconds = document.getElementById("backwardSeconds");
const forwardSeconds = document.getElementById("forwardSeconds");
const fullScreen = document.getElementById("fullScreen");
const mute = document.getElementById("volume");
const controlVolume = document.getElementById("controlVolume");

let actualVolume = 1;
let onFullscreen = false;
let duration;

if (sessionStorage.videoTitle) {
  video.src = sessionStorage.getItem("videoSrc");
  videoTitle.innerHTML = sessionStorage.getItem("videoTitle");
  videoText.innerHTML = sessionStorage.getItem("videoDescription");
  playIcon.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png";
  video.play();
}

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
  video.currentTime = video.currentTime - 5;
};
forwardSeconds.onclick = () => {
  video.currentTime = video.currentTime + 5;
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
  document.getElementById("volume").src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
  if (video.muted) video.muted = false;
  video.volume = event.target.value / 100;
  actualVolume = video.volume;
};

mute.onclick = () => {
  if (video.muted) {
    video.muted = false;
    video.volume = actualVolume;
    controlVolume.value = actualVolume * 100;
    volume.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Speaker_Icon.svg/500px-Speaker_Icon.svg.png";
  } else {
    video.muted = true;
    controlVolume.value = 0;
    volume.src = "https://cdn-icons-png.flaticon.com/512/108/108146.png";
  }
};

// Play y Pausa
play.onclick = () => {
  if (video.paused) {
    video.play();
    playIcon.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png";
  } else {
    video.pause();
    playIcon.src = "https://svgsilh.com/svg/1632434.svg";
  }
};

video.onclick = () => {
  if (video.paused) {
    video.play();
    playIcon.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png";
  } else {
    video.pause();
    playIcon.src = "https://svgsilh.com/svg/1632434.svg";
  }
};
