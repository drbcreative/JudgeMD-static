const menuTrigger = document.querySelector(".nav-burger-container"),
  burgerLine = document.querySelectorAll(".burger-line"),
  menu = document.querySelector(".menu-container");

menuTrigger.addEventListener("click", function() {
  // console.log("this worked");

  menu.classList.toggle("show");
  burgerLine.forEach(line => {
    line.classList.toggle("show");
  });
});
