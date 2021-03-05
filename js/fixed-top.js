
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".fixed-top");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
  // setup back to top link
  if (height > 500) {
    topLink.classList.add("fixed-top");
  } else {
    topLink.classList.remove("fixed-top");
  }
});