const videos = [
  {
    title: "Learn JavaScript in 10 Minutes",
    channel: "CodeMaster",
    thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/0.jpg"
  },
  {
    title: "HTML Crash Course",
    channel: "DevWorld",
    thumbnail: "https://img.youtube.com/vi/UB1O30fR-EE/0.jpg"
  },
  {
    title: "CSS Flexbox Guide",
    channel: "DesignPro",
    thumbnail: "https://img.youtube.com/vi/JJSoEo8JSnc/0.jpg"
  },
  {
    title: "React Basics",
    channel: "TechGuru",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/0.jpg"
  }
];

const container = document.getElementById("video-container");

function displayVideos(videoList) {
  container.innerHTML = "";

  videoList.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <img src="${video.thumbnail}" class="thumbnail">
      <div class="video-info">
        <div class="title">${video.title}</div>
        <div class="channel">${video.channel}</div>
      </div>
    `;

    card.onclick = () => {
      alert("Playing: " + video.title);
    };

    container.appendChild(card);
  });
}

function searchVideos() {
  const query = document.getElementById("search").value.toLowerCase();
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(query)
  );
  displayVideos(filtered);
}

// Load videos on start
displayVideos(videos);