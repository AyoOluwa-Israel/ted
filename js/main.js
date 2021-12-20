const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
burger.addEventListener("click", function () {
  burger.classList.toggle("change");
  navMenu.classList.toggle("open");
});
