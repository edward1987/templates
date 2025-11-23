const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('[data-slide="next"]');
const prevBtn = document.querySelector('[data-slide="prev"]');
let active = 0;
let timer;

function setActive(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  active = index;
}

function next() {
  const nextIndex = (active + 1) % slides.length;
  setActive(nextIndex);
}

function prev() {
  const prevIndex = (active - 1 + slides.length) % slides.length;
  setActive(prevIndex);
}

function autoplay() {
  clearInterval(timer);
  timer = setInterval(next, 5000);
}

if (slides.length) {
  autoplay();
  nextBtn?.addEventListener('click', () => { next(); autoplay(); });
  prevBtn?.addEventListener('click', () => { prev(); autoplay(); });
}

const timeline = document.querySelector('.timeline-list');
if (timeline) {
  const now = new Date();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const stamp = `${hours}:${minutes}`;
  timeline.dataset.updated = stamp;
}
