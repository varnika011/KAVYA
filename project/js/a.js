const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 1;
const size = slide[0].clientWidth;
const firstSlide = slide[0];
const lastSlide = slide[slide.length - 1];

// Duplicate first and last slide for infinite loop
const cloneFirst = firstSlide.cloneNode(true);
const cloneLast = lastSlide.cloneNode(true);
slides.appendChild(cloneFirst);
slides.insertBefore(cloneLast, firstSlide);

// Set initial position of slider
slides.style.transform = `translateX(${-size * counter}px)`;

// Slide functions
const slideLeft = () => {
  if (counter <= 0) return;
  slides.style.transition = 'transform 0.5s ease';
  counter--;
  slides.style.transform = `translateX(${-size * counter}px)`;
};

const slideRight = () => {
  if (counter >= slide.length - 1) return;
  slides.style.transition = 'transform 0.5s ease';
  counter++;
  slides.style.transform = `translateX(${-size * counter}px)`;
};

// Button event listeners
prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);

// Reset slider position for infinite loop
slides.addEventListener('transitionend', () => {
  if (slide[counter] === cloneFirst) {
    slides.style.transition = 'none';
    counter = 1;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
  if (slide[counter] === cloneLast) {
    slides.style.transition = 'none';
    counter = slide.length - 2;
    slides.style.transform = `translateX(${-size * counter}px)`;
  }
});
