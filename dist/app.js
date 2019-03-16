// Togle menu list
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");

menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!menuList.classList.contains("show")) {
    menuList.classList.add("show");
  } else {
    menuList.classList.remove("show");
  }
}

// Change header style below home section
const home = document.getElementById("home");
// const headerHeight = home.previousElementSibling.offsetHeight;
const breakingPoint =
  home.offsetHeight - home.previousElementSibling.offsetHeight;

const bottomOfHome = home.offsetHeight;

window.addEventListener("scroll", changeHeader);

function changeHeader() {
  console.log(bottomOfHome, window.scrollY);
  if (bottomOfHome <= window.scrollY) {
    document.body.classList.add("changed-header");
  } else {
    document.body.classList.remove("changed-header");
  }
}
