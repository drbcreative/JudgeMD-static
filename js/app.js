const menuTrigger = document.querySelector(".nav-burger"),
  menu = document.querySelector(".menu-container");

menuTrigger.addEventListener("click", function() {
  console.log("this worked");

  menu.classList.add("show");
});

menu.addEventListener("click", function() {
  menu.classList.remove("show");
});
