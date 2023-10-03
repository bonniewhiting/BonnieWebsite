const slidesContainer = document.getElementById("press");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slArrowPrev");
const nextButton = document.getElementById("slArrowNext");
 
nextButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});