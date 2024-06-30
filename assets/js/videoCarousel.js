// videoCarousel.js

document.addEventListener("DOMContentLoaded", () => {
  const videoCarousels = [
    { path: "assets/vids/9x16/", carouselId: "verticalCarousel" },
    { path: "assets/vids/4x5/", carouselId: "feedCarousel" },
  ];

  async function loadVideos() {
    for (const carousel of videoCarousels) {
      const videoContainer = document.getElementById(carousel.carouselId);
      if (videoContainer) {
        videoContainer.innerHTML = "";
        const videoPaths = await fetchVideoPaths(carousel.path);
        videoPaths.forEach((videoPath) => {
          const videoItem = document.createElement("div");
          videoItem.className = "carousel-item";
          videoItem.innerHTML = `
                      <div class="video-container">
                          <video src="${videoPath}" width="278" height="471" loop controls style="border-radius: 20px;"></video>
                      </div>`;
          videoContainer.appendChild(videoItem);
        });
      }
    }
  }

  async function fetchVideoPaths(path) {
    const response = await fetch(`list_videos.php?dir=${path}`);
    const videos = await response.json();
    return videos;
  }

  loadVideos();
});
