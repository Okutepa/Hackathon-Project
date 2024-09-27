const sidebar = document.querySelector(".sidebar");
const showSidebarButton = document.querySelector(".hideondesktop");
const hideSidebarButton = document.querySelector(".sidebar li:first-child a");

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

showSidebarButton.addEventListener("click", showSidebar);
hideSidebarButton.addEventListener("click", hideSidebar);
