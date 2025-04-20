
const carousel = document.getElementById("carousel");

function moveToSlide(slideIndex) {
  const slideWidth = carousel.clientWidth;
  carousel.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

item.classList.add("active");
