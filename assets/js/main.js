const slider = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let current = 0;

function goToSlide(index) {
  current = (index + slides.length) % slides.length;
  slider.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });
}

function nextSlide() {
  goToSlide(current + 1);
}

let autoplay = setInterval(nextSlide, 6000);

document.querySelectorAll('.dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(autoplay);
    goToSlide(index);
    autoplay = setInterval(nextSlide, 6000);
  });
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clearInterval(autoplay);
  } else {
    autoplay = setInterval(nextSlide, 6000);
  }
});

goToSlide(0);
