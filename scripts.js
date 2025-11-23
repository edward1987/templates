const sliderTrack = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('.dot-row');
const prevBtn = document.querySelector('.control.prev');
const nextBtn = document.querySelector('.control.next');

let currentIndex = 0;
let timer;

function renderDots() {
  dotsContainer.innerHTML = '';
  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (index === currentIndex ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  renderDots();
  restartTimer();
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

function restartTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(nextSlide, 6000);
}

if (sliderTrack && slides.length) {
  renderDots();
  restartTimer();
  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);
}
