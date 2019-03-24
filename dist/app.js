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

// Close menu list if outside click
// const nav = document.querySelector("nav");

document.addEventListener("click", clickOutside);

function clickOutside(e) {
  if (!e.target.closest(".menu-list") && !e.target.closest(".menu-icon")) {
    menuList.classList.remove("show");
  }
}

// Change header style below home section
const home = document.getElementById("home");
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

// On scroll animation - pendulous headings

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const pendulums = document.querySelectorAll(".section-heading");

window.addEventListener("scroll", debounce(swing));

function swing(e) {
  pendulums.forEach(pendulum => {
    const swingAt = window.scrollY + window.innerHeight;
    console.log(swingAt, pendulum.offsetTop);
    if (swingAt > pendulum.offsetTop) {
      pendulum.classList.add("pendulum");
    }
  });
}
