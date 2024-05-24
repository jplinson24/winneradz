var video = document.getElementById("myVideo");
document.querySelector('video').muted = false;

video.onclick = function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};
