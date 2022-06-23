//Consumo de la API para armar la lista de videos
const HTMLResponse = document.getElementById("video-list");
const ul = document.createElement("ul");
const urlAPI = "./videos.json";
const videoPlaying = document.getElementById("video");
const videoTitle = document.getElementById("video-title");
const videoText = document.getElementById("video-text");
const playIcono = document.getElementById("play");

fetch(urlAPI)
  .then((response) => response.json())
  .then((videos) => {
    videos.forEach((video) => {
      let li = document.createElement("li");
      let a = document.createElement("a");

      li.onclick = () => {
        videoPlaying.src = `${video.url}`;
        videoTitle.innerHTML = `${video.title}`;
        videoText.innerHTML = `${video.description}`;
        playIcono.src =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png";
        videoPlaying.play();
      };

      let img = document.createElement("img");
      img.src = `${video.image}`;
      img.className = "miniatures";

      let title = document.createElement("h3");
      title.innerHTML = `${video.title}`;

      a.appendChild(img);
      a.appendChild(title);
      li.appendChild(a);

      ul.appendChild(li);
    });
    HTMLResponse.appendChild(ul);
  });
