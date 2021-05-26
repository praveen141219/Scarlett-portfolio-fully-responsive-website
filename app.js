const hamburgerMenu = document.querySelector(".header__main-nav--hamburger");
const hamburgerContainer = document.querySelector("#header__main-nav");
const links = document.querySelectorAll(".header__main-nav--links li");

hamburgerMenu.addEventListener("click", () => {
  hamburgerContainer.classList.toggle("clicked");

  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
