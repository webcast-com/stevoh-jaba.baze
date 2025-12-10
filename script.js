// Image zoom modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("modalClose");

document.querySelectorAll('.image-grid img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('keydown', e => {
  if (e.key === "Escape") modal.style.display = "none";
});

modal.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = "none";
});

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = "✅ Message sent! We'll get back to you soon.";

  setTimeout(() => {
    formMessage.textContent = "";
    this.reset();
  }, 3000);
});

// DARK MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  }
});

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formMessage = document.getElementById('formMessage');
  formMessage.textContent = "✅ Message sent! We'll get back to you soon.";
  
  setTimeout(() => {
    formMessage.textContent = "";
    this.reset();
  }, 3000);
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const thumbs = document.querySelectorAll('.thumb');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.slider');
let current = 0;
let autoplayInterval;

// Show slide by index
function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  thumbs.forEach((t, i) => t.classList.toggle('active', i === index));

  current = index;
}

// Navigation handlers
prevBtn.addEventListener('click', () => {
  showSlide(current - 1);
  resetAutoplay();
});
nextBtn.addEventListener('click', () => {
  showSlide(current + 1);
  resetAutoplay();
});

// Dot indicators click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.index));
    resetAutoplay();
  });
});

// Thumbnail click
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    showSlide(Number(thumb.dataset.index));
    resetAutoplay();
  });
});

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    showSlide(current + 1);
  }, 4000);
}
function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// Swipe support
let startX = 0;
slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
}, false);

slider.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;
  if (Math.abs(diffX) > 50) {
    showSlide(diffX > 0 ? current - 1 : current + 1);
    resetAutoplay();
  }
}, false);

// Init
showSlide(current);
startAutoplay();

// Initialize particles.js
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#ffffff" },
    size: { value: 2.5 },
    move: { speed: 1.2 },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.25,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    }
  }
});
