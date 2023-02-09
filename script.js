
// Openning page
setTimeout(function() {
  document.querySelector("#opening").classList.add("hide");
  document.querySelector("#main").classList.add("show");
}, 1000);

// Display current year in the copyright text
document.getElementById("year").innerHTML = new Date().getFullYear();

// Close gallery open gallery1-8
var images = document.querySelectorAll(".image-container");
var newImages = document.querySelectorAll(".gallery-new img");
for (var i = 0; i < images.length; i++) {
images[i].addEventListener("click", function() {
var groupId = "group" + (parseInt(this.querySelector("img").alt.charAt(6)));
document.querySelectorAll(".image-container").forEach(function(image) {
image.style.transform = "translateX(5px)";
image.style.opacity = 0;
setTimeout(function() {
image.style.display = "none";
}, 300);
window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
});
});
var group = document.querySelector("#" + groupId);
if (group) {
group.style.display = "flex";
group.style.transform = "translateX(-5px)";
group.style.opacity = 0;
setTimeout(function() {
group.style.transform = "translateX(0)";
group.style.opacity = 1;
}, 300);
} else {
console.error("Element with ID " + groupId + " not found");
}
});
}

// Close gallery1-8 open gallery
for (var i = 0; i < newImages.length; i++) {
  newImages[i].addEventListener("click", function() {
    document.querySelectorAll(".gallery-new").forEach(function(group) {
      group.style.display = "none";
      group.style.transform = "translateX(+5px)";
      setTimeout(function() {
        group.style.transform = "translateX(0)";
        }, 300);
    });
    document.querySelectorAll(".image-container").forEach(function(image) {
      image.style.display = "inline-block";
      image.style.transform = "translateX(+10px)";
      setTimeout(function() {
        image.style.transform = "translateX(0)";
        image.style.opacity = 1;
        }, 10);
    });
  });
}

const carousels = document.querySelectorAll("[data-carousel]");

carousels.forEach(carousel => {
  const buttons = carousel.querySelectorAll("[data-carousel-button]");

  buttons.forEach(button => {
    button.addEventListener("click", event => {
      const slides = carousel.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      const currentIndex = [...slides.children].indexOf(activeSlide);
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      let newIndex = currentIndex + offset;
      
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      } 
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }

      activeSlide.removeAttribute("data-active");
      slides.children[newIndex].setAttribute("data-active", "");
    });
  });
});


const logos = document.querySelectorAll(".prlogo");
logos.forEach(logo => {
const randX = Math.random() * 40 - 20;
const randY = Math.random() * 40 - 20;
logo.style.setProperty("--randX", randX);
logo.style.setProperty("--randY", randY);
});

