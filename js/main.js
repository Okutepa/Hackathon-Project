const sidebar = document.querySelector(".sidebar");
const showSidebarButton = document.querySelector(".hideondesktop a");
const hideSidebarButton = document.querySelector(".sidebar li:first-child a");
const player = document.querySelector("video");
const videoControls = document.querySelector("#video-controls");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");
const playerCon = document.querySelector("#player-container");

player.controls = false;
videoControls.classList.remove("hidden");
videoControls.style.display = "flex";

function showSidebar() {
  sidebar.classList.add("show");
}

function hideSidebar() {
  sidebar.classList.remove("show");
}

showSidebarButton.addEventListener("click", showSidebar);
hideSidebarButton.addEventListener("click", hideSidebar);

function playVideo() {
  console.log("play called");
  player.play();
}

function pauseVideo() {
  console.log("pause called");
  player.pause();
}

function stopVideo() {
  console.log("stop called");
  player.currentTime = 1;
  pauseVideo();
}

function changeVolume() {
  console.log(volumeSlider.value);
  player.volume = volumeSlider.value;
}

function toggleFullScreen() {
  console.log("toggle full Screen Called");
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullScreenElement) {
    document.webkitFullScreenElement();
  } else if (playerCon.webkitRequestFullScreen) {
    playerCon.webkitRequestFullscreen();
  } else {
    playerCon.requestFullscreen();
  }
}

function hideControls() {
  if (player.paused) {
    return;
  }
  videoControls.classList.add("hide");
}

function showControls() {
  videoControls.classList.remove("hide");
}

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("change", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);

videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);
