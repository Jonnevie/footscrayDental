window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");

  nav.classList.toggle("scroll-active", window.scrollY > 0);
});
