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

const portfolioCon = document.querySelector("#portfolio-con");
const students = [
  { name: "Rodriguez-Ramos Diego", link: "sahilgosaliya.com" },
  { name: "Cooper Kayla", link: "johndoeportfolio.com" },
  { name: "Lozon Ramona", link: "janesmithportfolio.com" },
  { name: "Chen	Qingdong", link: "janesmithportfolio.com" },
  { name: "Khan Taylor", link: "alicejohnsonportfolio.com" },
  {
    name: "Pelacek-Boutilier Cassidy",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Bilyea Isaac", link: "alicejohnsonportfolio.com" },
  { name: "Carriere Ezra", link: "alicejohnsonportfolio.com" },
  { name: "Salwan	Shauraya", link: "alicejohnsonportfolio.com" },
  { name: "Reji Vazhavilayil	Rebin", link: "alicejohnsonportfolio.com" },
  { name: "Park	Kyuri", link: "alicejohnsonportfolio.com" },
  { name: "Meijer	Nikolai", link: "alicejohnsonportfolio.com" },
  { name: "Hanbury	Xaviere", link: "alicejohnsonportfolio.com" },
  { name: "Buck	Amari", link: "alicejohnsonportfolio.com" },
  { name: "Sivaskaran	Thaseekaran", link: "alicejohnsonportfolio.com" },
  { name: "Parmar	Meet Amrutbhai", link: "alicejohnsonportfolio.com" },
  { name: "Reyes	Justin Rian", link: "alicejohnsonportfolio.com" },
  { name: "Yantizhanov	Alisher", link: "alicejohnsonportfolio.com" },
  { name: "Thakur	Parvesh", link: "alicejohnsonportfolio.com" },
  { name: "Damen	Meghan", link: "alicejohnsonportfolio.com" },
  {
    name: "Amjad Omar Abu-Sa'ad	Saif",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Zhang	Bozhi", link: "alicejohnsonportfolio.com" },
  { name: "Chu	Qiao-Yi", link: "alicejohnsonportfolio.com" },
  { name: "Maxwell	Sashoye", link: "alicejohnsonportfolio.com" },
  { name: "Bondarchuk	Dina", link: "alicejohnsonportfolio.com" },
  { name: "Okutepa	Wisdom Utenwojo", link: "alicejohnsonportfolio.com" },
  { name: "Macapagal	Bernardo Jr.", link: "alicejohnsonportfolio.com" },
  { name: "Celis	Ezekiel John", link: "alicejohnsonportfolio.com" },
  { name: "Macadams	Katrina", link: "alicejohnsonportfolio.com" },
  { name: "Yam	Lok Ting Tina", link: "alicejohnsonportfolio.com" },
  { name: "Nguyen	Thi Thanh Thuong", link: "alicejohnsonportfolio.com" },
  {
    name: "Quelali Evangelista	Jenifer",
    link: "alicejohnsonportfolio.com",
  },
  {
    name: "Nobre Do Nascimento	Rodrigo",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Gabbassova	Milana", link: "alicejohnsonportfolio.com" },
  {
    name: "Cardenas Ramos	Izel Esteban",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Flores	Timothy Bryle", link: "alicejohnsonportfolio.com" },
  { name: "Sit	Loi Pan", link: "alicejohnsonportfolio.com" },
  { name: "Polchai	Napas", link: "alicejohnsonportfolio.com" },
  { name: "Singh	Akamjot", link: "alicejohnsonportfolio.com" },
  { name: "Opadele	Emmanuel", link: "alicejohnsonportfolio.com" },
  { name: "Sojan	Shon", link: "alicejohnsonportfolio.com" },
  { name: "Biju Varghese	Shiyon", link: "alicejohnsonportfolio.com" },
  {
    name: "Jashan Kumar	Jashan Kumar",
    link: "alicejohnsonportfolio.com",
  },
  {
    name: "Dhaliwal	Meetinder Singh",
    link: "alicejohnsonportfolio.com",
  },
  {
    name: "Harnoorpreet Kaur	Harnoorpreet Kaur",
    link: "alicejohnsonportfolio.com",
  },
  {
    name: "Juntarattanakamol	Apapat",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Bandarra	Sydney", link: "alicejohnsonportfolio.com" },
  { name: "Ogbeide	Osarieme", link: "alicejohnsonportfolio.com" },
  { name: "Huertas	Tanya Mae", link: "alicejohnsonportfolio.com" },
  {
    name: "Cano Menendez	Carlos Andres",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Bishokarma	Kamana", link: "alicejohnsonportfolio.com" },
  { name: "Sham	King Yin", link: "alicejohnsonportfolio.com" },
  { name: "Benipal	Tapshveer", link: "alicejohnsonportfolio.com" },
  { name: "Laput	Dixie Marie", link: "alicejohnsonportfolio.com" },
  { name: "Lie	Keith", link: "alicejohnsonportfolio.com" },
  {
    name: "Gamborgi Menezes	Henrique",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Mahaittidon	Natchanon", link: "alicejohnsonportfolio.com" },
  { name: "Chan	Wing Lam Stephanie", link: "alicejohnsonportfolio.com" },
  { name: "Lai	Yi Ting", link: "alicejohnsonportfolio.com" },
  { name: "Gohetia	Sheldon", link: "alicejohnsonportfolio.com" },
  { name: "Gregory	Joyal", link: "alicejohnsonportfolio.com" },
  { name: "Sidhu	Sukhbhag Singh", link: "alicejohnsonportfolio.com" },
  { name: "Shah	Het", link: "alicejohnsonportfolio.com" },
  { name: "Patel	Lav Pareshkumar", link: "alicejohnsonportfolio.com" },
  {
    name: "Jayasinghe Mudalige	Wimarsha",
    link: "alicejohnsonportfolio.com",
  },
  { name: "Ho	Gia Khang", link: "alicejohnsonportfolio.com" },
  { name: "Bendzsel	Kristina", link: "alicejohnsonportfolio.com" },
  // Add more student objects here
];

// Variables
let currentIndex = 0; // Current active index

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

students.forEach((student) => {
  const studentDiv = document.createElement("div");
  studentDiv.classList.add("col-span-full");
  studentDiv.classList.add("student");

  const studentName = document.createElement("h4");
  studentName.textContent = student.name;

  const studentLink = document.createElement("a");
  studentLink.href = `http://${student.link}`;
  studentLink.target = "_blank";
  studentLink.textContent = student.link;
  studentLink.classList.add("student-link");

  studentDiv.appendChild(studentName);
  studentDiv.appendChild(studentLink);

  portfolioCon.appendChild(studentDiv);
});

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

document.addEventListener("DOMContentLoaded", init);
