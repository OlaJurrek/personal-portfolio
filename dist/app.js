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
