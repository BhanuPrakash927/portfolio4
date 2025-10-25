AOS.init();

const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
