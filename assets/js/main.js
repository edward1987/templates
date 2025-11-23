const slider = document.querySelector('[data-slider]');
const slides = Array.from(document.querySelectorAll('.slide'));
const dotsContainer = document.querySelector('[data-dots]');
let current = 0;
let interval;

function buildDots() {
  slides.forEach((_, idx) => {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => goTo(idx));
    dotsContainer.appendChild(btn);
  });
}

function goTo(index) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = index;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
  restartInterval();
}

function next() {
  const nextIndex = (current + 1) % slides.length;
  goTo(nextIndex);
}

function restartInterval() {
  clearInterval(interval);
  interval = setInterval(next, 5200);
}

if (slider && slides.length) {
  buildDots();
  goTo(0);
  restartInterval();
}
