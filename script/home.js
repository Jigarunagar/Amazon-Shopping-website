let currentSlide = 0;
const wrapper = document.getElementById("carouselWrapper");
const totalSlides = wrapper.children.length;

function moveSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const offset = -currentSlide * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
}
setInterval(() => moveSlide(1), 3000);