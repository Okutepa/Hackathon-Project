const sidebar = document.querySelector(".sidebar");
const showSidebarButton = document.querySelector(".hideondesktop a");
const hideSidebarButton = document.querySelector(".sidebar li:first-child a");
const playerCon = document.querySelector("#player-container");
const player = document.querySelector("video");
const videoControls = document.querySelector("#video-controls");
const bigPlayButton = document.querySelector("#big-play-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");
const timer = document.querySelector("#timer");
const videoProgress = document.querySelector("#video-progress");

const testimonials = [
  {
    name: "Aimee Hagerty",
    title: "co-founder and Board member for foundation Sixty6",
    quote:
      "These amazing students bring fresh perspectives and innovative ideas to the table. Their dedication to the project is truly inspiring.",
    id: "testimonial-1",
  },
  {
    name: "Bill Hagerty",
    title: "co-founder and Board member for foundation Sixty6",
    quote:
      "It’s been incredible to work alongside these talented students. Their passion and dedication reaffirm our commitment to supporting youth mental health.",
    id: "testimonial-2",
  },
  {
    name: "Marco De Luca",
    title: "IDP Program coordinator and professor for Fanshawe",
    quote:
      "Observing the students collaborating with Foundation Sixty6 has been an inspiring journey. The creativity and skill displayed by the students have been truly outstanding.",
    id: "testimonial-3",
  },
];

const testimonialCon = document.getElementById("testimonial-con");

console.log(testimonials);

player.controls = false;
videoControls.classList.remove("hidden");

function showSidebar() {
  sidebar.classList.add("show");
}

function hideSidebar() {
  sidebar.classList.remove("show");
}

function playVideo() {
  player.play();
  bigPlayButton.classList.add("hide-button");
  bigPlayButton.innerHTML = '<i class="fa fa-pause-circle-o"></i>';
}

function pauseVideo() {
  player.pause();
  bigPlayButton.classList.remove("hide-button");
  bigPlayButton.innerHTML = '<i class="fa fa-play-circle-o"></i>';
}

function togglePlayPause() {
  if (player.paused) {
    playVideo();
  } else {
    pauseVideo();
  }
}

function changeVolume() {
  player.volume = volumeSlider.value;
}

function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
  } else if (playerCon.webkitRequestFullscreen) {
    // Need this to support Safari
    playerCon.webkitRequestFullscreen();
  } else {
    playerCon.requestFullscreen();
  }
}

function updateTimer() {
  const currentTime = player.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  timer.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  const percentage = (currentTime / player.duration) * 100;
  videoProgress.value = percentage;
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

function populateTestimonials() {
  testimonials.forEach((testimonial) => {
    const testimonialDiv = document.getElementById(testimonial.id);

    if (testimonialDiv) {
      testimonialDiv.innerHTML = `
        <h2>${testimonial.name}</h2>
        <h5>${testimonial.title}</h5>
        <p>${testimonial.quote}</p>
      `;
    }
  });
}
populateTestimonials();

showSidebarButton.addEventListener("click", showSidebar);
hideSidebarButton.addEventListener("click", hideSidebar);

playerCon.addEventListener("click", togglePlayPause);
volumeSlider.addEventListener("change", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);
playerCon.addEventListener("mouseenter", showControls);
playerCon.addEventListener("mouseleave", hideControls);
player.addEventListener("timeupdate", updateTimer);
videoProgress.addEventListener("input", setVideoProgress);

videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);
player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);

player.addEventListener("timeupdate", updateTimer); // Update timer on time update
videoProgress.addEventListener("input", setVideoProgress); // Set video progress on slider input

window.addEventListener("resize", renderTestimonials);
