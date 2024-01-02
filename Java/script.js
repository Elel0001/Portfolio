// //******************* */ taget fra aflevring tema 5 - carousel web med hjælp af ChatGPT + ændringer ***************

// const carousel = document.querySelector(".carousel");
// const slides = document.querySelectorAll(".carousel-slide");
// const prevArrow = document.querySelector(".prev-arrow");
// const nextArrow = document.querySelector(".next-arrow");
// let currentIndex = 0;

// function showSlides() {
//   slides.forEach((slide, i) => {
//     const isVisible = i >= currentIndex && i < currentIndex + 3; // Show three slides at a time and hide the rest
//     slide.style.display = isVisible ? "block" : "none";
//   });
// }

// function nextSlide() {
//   currentIndex += 3; // Increment by 3 to show three slides
//   if (currentIndex >= slides.length) currentIndex = 0;
//   console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
//   showSlides();
// }

// function prevSlide() {
//   currentIndex -= 3; // Decrement by 3 to show four slides
//   if (currentIndex < 0) currentIndex = Math.floor((slides.length - 1) / 3) * 3; // show last page
//   console.log("Cur. index: " + currentIndex + " Last index: " + (slides.length - 1));
//   showSlides();
// }

// nextArrow.addEventListener("click", nextSlide);
// prevArrow.addEventListener("click", prevSlide);

// // Show the initial slides
// showSlides();

// //****************************** */ carousel end************************
