document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-principal");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});



