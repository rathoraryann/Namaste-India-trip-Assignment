function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".mobile-menu-icon");

  if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
    navLinks.style.display = "none";
  }
});

// Select slider elements
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    let index = 0; // Store index for each slider

    const slides = sliderContainer.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const leftBtn = sliderContainer.querySelector(".slider-btn.left");
    const rightBtn = sliderContainer.querySelector(".slider-btn.right");

    function updateSlider() {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }

    leftBtn.addEventListener("click", function () {
      index = (index - 1 + totalSlides) % totalSlides; // Move left
      updateSlider();
    });

    rightBtn.addEventListener("click", function () {
      index = (index + 1) % totalSlides; // Move right
      updateSlider();
    });

    updateSlider(); // Initialize positions
  });
});

let slideIndex = 0;
let autoSlideInterval;

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlinkslideIndex -= 1;
}

function createDots() {
  const dotsContainer = document.querySelector(".dots-container");
  const slides = document.querySelectorAll(".slide");

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      slideIndex = index;
      showSlides(slideIndex);
      resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
  });
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize slider
document.addEventListener("DOMContentLoaded", () => {
  createDots();
  showSlides(slideIndex);
  startAutoSlide();

  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
});

const slider = document.querySelector(".happy-traveller-slides");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".happy-traveller-card").offsetWidth;
  slider.scrollBy({
    left: cardWidth + 20,
    behavior: "smooth",
  });
});

prevButton.addEventListener("click", () => {
  const cardWidth = document.querySelector(".happy-traveller-card").offsetWidth;
  slider.scrollBy({
    left: -(cardWidth + 20),
    behavior: "smooth",
  });
});

// Handle window resize
window.addEventListener("resize", () => {
  slider.scrollLeft = 0;
});
