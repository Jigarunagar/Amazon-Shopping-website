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
/////////////

const Twowheelsfeelthefreedom =[
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },
  { img: "" },

];

const Moreitemstoconsider = [
  { img: "https://m.media-amazon.com/images/I/710SxepIfiL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61xsFt3w2SL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61sylN5DqXL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61oSwPvRWLL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/51oOuDkGSuL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/51Wexq2UEtL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61Av1lptLkL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/81-MIqXzxxL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/51yz8iqVdUL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/71l0xZ29TfS._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61BpmT9Gv1L._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61pqeHoXFZL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/81pm1OhatQL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/610EhNL+6WL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/71jIoW8KArL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/61lVXbA4ZdS._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/51S9LsGZOQL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/51SJFadM3WL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/517FvNN-33L._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/517FvNN-33L._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/7153TF65MgL._AC_SY200_.jpg" },
  { img: "https://m.media-amazon.com/images/I/71DVfS4RBaL._AC_SY200_.jpg" },
];



function createSlider(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card mx-2 border-0";
    card.innerHTML = `<img src="${item.img}" class="card-img-top w-100" alt="Card Image">`;
    container.appendChild(card);
  });
}

// Slider Navigation Logic
function setupSliderNavigation(sliderId, prevBtnId, nextBtnId) {
  const slider = document.getElementById(sliderId);
  let currentIndex = 0;

  const updateSlider = () => {
    const card = slider.querySelector(".card");
    const cardWidth = card.getBoundingClientRect().width + 16; // margin included
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  };

  document.getElementById(nextBtnId).addEventListener("click", () => {
    const totalCards = slider.querySelectorAll(".card").length;
    const card = slider.querySelector(".card");
    const cardWidth = card.getBoundingClientRect().width + 16;
    const visibleCards = Math.floor(
      slider.parentElement.offsetWidth / cardWidth
    );
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
      updateSlider();
    }
  });

  document.getElementById(prevBtnId).addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateSlider);
}

// Render both sliders
createSlider(Twowheelsfeelthefreedom , "cardSlider1");
createSlider(Moreitemstoconsider, "cardSlider2");
setupSliderNavigation("cardSlider1", "prevBtn1", "nextBtn1");
setupSliderNavigation("cardSlider2", "prevBtn2", "nextBtn2");
