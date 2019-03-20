// Page Animations
// DOM Elements by Class
const fader = document.querySelectorAll(".fader");
const faderText = document.querySelectorAll(".fader-text");
const slideUpContainer = document.querySelectorAll(".slideup-container");
const slideupContent = document.querySelectorAll(".slideup-content");
const serviceContainer = document.querySelector(".onlinestore");
const service = document.querySelectorAll(".service");
const winHeight = window.innerHeight;
// const winWidth = window.innerWidth;

// Scroll Events
// Event Listener
window.addEventListener("scroll", function() {
  for (let i = 0; i < fader.length; i++) {
    let img = fader[i],
      // scrollTop = window.pageYOffset,
      winHalf = Math.floor(window.innerHeight / 2),
      // imgHeight = Math.floor(img.getBoundingClientRect().height),
      imgTop = img.getBoundingClientRect().top;

    if (imgTop < winHalf) {
      img.classList.add("show");
    } else {
      img.classList.remove("show");
    }
  }

  // Text Fades
  for (let i = 0; i < faderText.length; i++) {
    let text = faderText[i],
      winHalf = Math.floor(window.innerHeight / 2),
      textTop = text.getBoundingClientRect().top;

    if (textTop < winHalf * 1.2) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  }

  // Slide Up Graphic
  // Slide Up Element Container
  slideUpContainer.forEach((slide, i) => {
    const slideTop = slide.getBoundingClientRect().top;

    if (slideTop < winHeight / 2) {
      slideupContent[i].classList.add("show");
    } else {
      slideupContent[i].classList.remove("show");
    }
  });

  //Service Fade In
  if (serviceContainer.getBoundingClientRect().top < winHeight / 2) {
    service.forEach(function(serv, i) {
      setTimeout(function() {
        serv.classList.add("show");
      }, i * 150);
    });
  } else {
    service.forEach(function(serv, i) {
      setTimeout(function() {
        serv.classList.remove("show");
      }, i * 150);
    });
  }
});
