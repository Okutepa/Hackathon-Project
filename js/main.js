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
  { name: "Rodriguez-Ramos Diego", link: "rodriguez-ramosdiego.com" },
  { name: "Cooper Kayla", link: "cooperkayla.com" },
  { name: "Lozon Ramona", link: "lozonramona.com" },
  { name: "Chen Qingdong", link: "chenqingdong.com" },
  { name: "Khan Taylor", link: "khantaylor.com" },
  { name: "Pelacek-Boutilier Cassidy", link: "pelacek-boutiliercassidy.com" },
  { name: "Bilyea Isaac", link: "bilyeaisaac.com" },
  { name: "Carriere Ezra", link: "carriereezra.com" },
  { name: "Salwan Shauraya", link: "salwanshauraya.com" },
  { name: "Reji Vazhavilayil Rebin", link: "rejivazhavilayilrebin.com" },
  { name: "Park Kyuri", link: "parkkyuri.com" },
  { name: "Meijer Nikolai", link: "meijernikolai.com" },
  { name: "Hanbury Xaviere", link: "hanburyxaviere.com" },
  { name: "Buck Amari", link: "buckamari.com" },
  { name: "Sivaskaran Thaseekaran", link: "sivaskarenthaseekaran.com" },
  { name: "Parmar Meet Amrutbhai", link: "parmarmeetamrutbhai.com" },
  { name: "Reyes Justin Rian", link: "reyesjustinrian.com" },
  { name: "Yantizhanov Alisher", link: "yantizhanovalisher.com" },
  { name: "Thakur Parvesh", link: "thakurparvesh.com" },
  { name: "Damen Meghan", link: "damenmeghan.com" },
  { name: "Amjad Omar Abu-Sa'ad Saif", link: "amjadomarabu-saadsaif.com" },
  { name: "Zhang Bozhi", link: "zhangbozhi.com" },
  { name: "Chu Qiao-Yi", link: "chuqiaoyi.com" },
  { name: "Maxwell Sashoye", link: "maxwellsashoye.com" },
  { name: "Bondarchuk Dina", link: "bondarchukdina.com" },
  { name: "Okutepa Wisdom Utenwojo", link: "okutepawisdomutenwojo.com" },
  { name: "Macapagal Bernardo Jr.", link: "macapagalbernardojr.com" },
  { name: "Celis Ezekiel John", link: "celisezikeljohn.com" },
  { name: "Macadams Katrina", link: "macadamskatrina.com" },
  { name: "Yam Lok Ting Tina", link: "yamloktingtina.com" },
  { name: "Nguyen Thi Thanh Thuong", link: "nguyenthithanhthuong.com" },
  { name: "Quelali Evangelista Jenifer", link: "quelalievangelistajenifer.com" },
  { name: "Nobre Do Nascimento Rodrigo", link: "nobredonascimentorodrigo.com" },
  { name: "Gabbassova Milana", link: "gabbassovamilana.com" },
  { name: "Cardenas Ramos Izel Esteban", link: "cardenasramosizeledteban.com" },
  { name: "Flores Timothy Bryle", link: "florestimothybryle.com" },
  { name: "Sit Loi Pan", link: "sitloipan.com" },
  { name: "Polchai Napas", link: "polchainapas.com" },
  { name: "Singh Akamjot", link: "singhakamjot.com" },
  { name: "Opadele Emmanuel", link: "opadeleemmanuel.com" },
  { name: "Sojan Shon", link: "sojanshon.com" },
  { name: "Biju Varghese Shiyon", link: "bijuvargheseshiyon.com" },
  { name: "Jashan Kumar Jashan Kumar", link: "jashankumar.com" },
  { name: "Dhaliwal Meetinder Singh", link: "dhaliwalmeetindersingh.com" },
  { name: "Harnoorpreet Kaur Harnoorpreet Kaur", link: "harnoorpreetkaur.com" },
  { name: "Juntarattanakamol Apapat", link: "juntarattanakamolapapat.com" },
  { name: "Bandarra Sydney", link: "bandarrasydney.com" },
  { name: "Ogbeide Osarieme", link: "ogbeideosarieme.com" },
  { name: "Huertas Tanya Mae", link: "huertastanyamae.com" },
  { name: "Cano Menendez Carlos Andres", link: "canomenendezcarlosandres.com" },
  { name: "Bishokarma Kamana", link: "bishokarmakamana.com" },
  { name: "Sham King Yin", link: "shamkingyin.com" },
  { name: "Benipal Tapshveer", link: "benipaltapshveer.com" },
  { name: "Laput Dixie Marie", link: "laputdixiemarie.com" },
  { name: "Lie Keith", link: "liekeith.com" },
  { name: "Gamborgi Menezes Henrique", link: "gamborgimenezeshenrique.com" },
  { name: "Mahaittidon Natchanon", link: "mahaittidonnatchanon.com" },
  { name: "Chan Wing Lam Stephanie", link: "chanwinglamstephanie.com" },
  { name: "Lai Yi Ting", link: "laiyiting.com" },
  { name: "Gohetia Sheldon", link: "gohetiasheldon.com" },
  { name: "Gregory Joyal", link: "gregoryjoyal.com" },
  { name: "Sidhu Sukhbhag Singh", link: "sidhusukhbhagsingh.com" },
  { name: "Shah Het", link: "shahhet.com" },
  { name: "Patel Lav Pareshkumar", link: "patellavpareshkumar.com" },
  { name: "Jayasinghe Mudalige Wimarsha", link: "jayasinghemudaligewimarsha.com" },
  { name: "Ho Gia Khang", link: "hogiakhang.com" },
  { name: "Bendzsel Kristina", link: "bendzselkristina.com" },
];

const developers = [
  { id: "developer1", name: "Napas Polchai", website: "Napas.com" },
  { id: "developer2", name: "Wisdom Okutepa", website: "Wisdomokutepa.com" },
  { id: "developer3", name: "Justine Rian Reyes", website: "Justinereyes.com" },
  { id: "developer4", name: "Alisher Yantishanov", website: "Alisher.com" }
];

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

function setVideoProgress() {
  const progress = (videoProgress.value / videoProgress.max) * player.duration;
  player.currentTime = progress;
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

function populateDevelopers() {
  developers.forEach((developer) => {
    const developerDiv = document.getElementById(developer.id);

    if (developerDiv) {
      developerDiv.innerHTML = `
        <h4>${developer.name}</h4>
        <p>${developer.website}</p>
      `;
    }
  });
}

populateDevelopers();

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

player.addEventListener("timeupdate", updateTimer);
videoProgress.addEventListener("input", setVideoProgress);
