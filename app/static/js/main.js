// DataForge Consulting — main.js

// Scroll reveal con IntersectionObserver
(function () {
  const reveals = document.querySelectorAll(
    '.service-card, .sys-card, .problem-item, .cert-card, .process-step'
  );

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .5s ease ${i * 0.06}s, transform .5s ease ${i * 0.06}s`;
    obs.observe(el);
  });
})();

// Nav: sombra al hacer scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
document.querySelectorAll('.sys-card').forEach(card => {
    const header = card.querySelector('.sys-header');
    
    // Agregar flecha al header
    const arrow = document.createElement('span');
    arrow.className = 'sys-toggle';
    arrow.textContent = '▼';
    header.appendChild(arrow);

    header.addEventListener('click', () => {
        card.classList.toggle('open');
    });
});