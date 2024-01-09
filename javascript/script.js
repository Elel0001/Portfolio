// //******************* */ Caroussel er taget fra aflevering tema 5, og tilpasset mit eget design *****/ - carousel web med hjælp af ChatGPT + ændringer ***************

const carouselMobil = document.querySelector(".carousel_mobil");
const slidesMobil = document.querySelectorAll(".carousel-slide_mobil");
const prevArrowMobil = document.querySelector(".prev-arrow_mobil");
const nextArrowMobil = document.querySelector(".next-arrow_mobil");
let currentIndexMobil = 0;

function showSlidesMobil() {
  slidesMobil.forEach((slide, i) => {
    const isVisible = i >= currentIndexMobil && i < currentIndexMobil + 1; // Show one slides at a time and hide the rest
    slide.style.display = isVisible ? "block" : "none";
  });
}

function nextSlideMobil() {
  currentIndexMobil += 1;
  if (currentIndexMobil >= slidesMobil.length) currentIndexMobil = 0;
  console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
  showSlidesMobil();
}

function prevSlideMobil() {
  currentIndexMobil -= 1;
  if (currentIndexMobil < 0) currentIndexMobil = Math.floor((slidesMobil.length - 1) / 1) * 1; // show last page
  console.log("Cur. index: " + currentIndexMobil + " Last index: " + (slidesMobil.length - 1));
  showSlidesMobil();
}

nextArrowMobil.addEventListener("click", nextSlideMobil);
prevArrowMobil.addEventListener("click", prevSlideMobil);

// Show the initial slides
showSlidesMobil();

//******************* */ carousel web med hjælp af ChatGPT + ændringer ***************

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel-slide");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
let currentIndex = 0;

function showSlides() {
  slides.forEach((slide, i) => {
    const isVisible = i >= currentIndex && i < currentIndex + 3; // Show three slides at a time and hide the rest
    slide.style.display = isVisible ? "block" : "none";
  });
}

function nextSlide() {
  currentIndex += 1;
  if (currentIndex + 2 >= slides.length) {
    currentIndex = 0; // Reset to the beginning
  }
  console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
  showSlides();
}

function prevSlide() {
  currentIndex -= 1;
  if (currentIndex < 0) currentIndex = Math.floor((slides.length - 1) / 3) * 3; // show last page
  console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
  showSlides();
}

nextArrow.addEventListener("click", nextSlide);
prevArrow.addEventListener("click", prevSlide);

// Show the initial slides
showSlides();

//****************************** */ carousel end************************
