// Loading spinner
document.onreadystatechange = function() {
  let state = document.readyState;
  if (state == "complete") {
    document.getElementById("loading").style.visibility = "hidden";
  }
};

// Auto type heading
const TypeWriter = function(txtElement, words, wait = 2000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  // Current index of word
  const current = this.wordIndex % this.words.length;
  // Get full text of current word
  const fullTxt = this.words[current];
  // Check if deleting
  if (this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Initial time speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

// Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

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

// Initialize Smooth Scroll
const scroll = new SmoothScroll('a[href*="#"]', { speed: 500 });
