const menuTrigger = document.querySelector(".nav-burger-container"),
  burgerLine = document.querySelectorAll(".burger-line"),
  menu = document.querySelector(".menu-container"),
  header = document.querySelector("header"),
  navLinks = document.querySelectorAll(".navbar-link"),
  topLogo = document.querySelector(".top-menu-logo"),
  socialMenu = document.querySelector(".header-social-menu");

menuTrigger.addEventListener("click", function(e) {
  e.preventDefault();
  menu.classList.toggle("show");
  burgerLine.forEach(line => {
    line.classList.toggle("active");
  });
});

// Page scrolling Event Listener
window.addEventListener("scroll", function() {
  const winScroll = window.pageYOffset;

  if (winScroll > 50) {
    header.classList.add("show");
    topLogo.classList.add("active");
    socialMenu.classList.add("active");
    burgerLine.forEach(line => {
      line.classList.add("show");
    });
    navLinks.forEach(link => {
      link.classList.add("active");
    });
  } else if (winScroll < 50) {
    header.classList.remove("show");
    topLogo.classList.remove("active");
    socialMenu.classList.remove("active");
    burgerLine.forEach(line => {
      line.classList.remove("show");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
  }
});
