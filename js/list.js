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

      if (videoPlaying) {
        li.onclick = () => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
          videoPlaying.src = `${video.url}`;
          videoTitle.innerHTML = `${video.title}`;
          videoText.innerHTML = `${video.description}`;
          playIcono.src =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/OOjs_UI_icon_pause.svg/768px-OOjs_UI_icon_pause.svg.png";
          videoPlaying.play();
        };
      } else {
        li.onclick = () => {
          sessionStorage.setItem("videoSrc", `${video.url}`);
          sessionStorage.setItem("videoTitle", `${video.title}`);
          sessionStorage.setItem("videoDescription", `${video.description}`);
          window.open("../player.html", "_self");
        };
      }

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
