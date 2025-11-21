// Toggle theme (light / dark-ish)
const themeBtn = document.getElementById('themeToggle');
themeBtn && themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode');
  if (document.documentElement.classList.contains('darkmode')) {
    document.documentElement.style.setProperty('--bg','#0f1222');
    document.documentElement.style.setProperty('--card','#0b0b12');
    document.documentElement.style.setProperty('--accent-text','#f5f5fb');
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--accent-text');
  }
});

// Mobile menu toggle (simple)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav');
menuToggle && menuToggle.addEventListener('click', () => {
  if (!navLinks) return;
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = '';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Smooth scroll for sidebar links
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    // close mobile menu
    if (window.innerWidth <= 900) navLinks.style.display = '';
  });
});
