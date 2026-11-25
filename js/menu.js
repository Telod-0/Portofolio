const menuToggle = document.querySelector("#mobile-menu-toggle");
const menuLinks = document.querySelectorAll("#mobile-nav a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});
