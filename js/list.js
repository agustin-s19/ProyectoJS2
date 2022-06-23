//Consumo de la API para armar la lista de videos
const HTMLResponse = document.getElementById("video-list");
const ul = document.createElement("ul");
const urlAPI = "./videos.json";

fetch(urlAPI)
  .then((response) => response.json())
  .then((videos) => {
    videos.forEach((video) => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = `index.html/${video.id}`;

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
