// Nav: sombra al hacer scroll
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Accordion sistemas internos
document.querySelectorAll('.sys-card').forEach(card => {
  const header = card.querySelector('.sys-header');

  const arrow = document.createElement('span');
  arrow.className = 'sys-toggle';
  arrow.textContent = '▼';
  header.appendChild(arrow);

  header.addEventListener('click', () => {
    card.classList.toggle('open');
  });
});