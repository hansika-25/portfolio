// Mobile menu toggle
document.getElementById('hamburger')?.addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  const shown = nav.style.display === 'flex';
  nav.style.display = shown ? 'none' : 'flex';
  if (!shown) nav.style.flexDirection = 'column';
});

// second page hamburger (if exists)
document.getElementById('hamburger2')?.addEventListener('click', () => {
  const nav = document.getElementById('navLinks2');
  if (!nav) return;
  const shown = nav.style.display === 'flex';
  nav.style.display = shown ? 'none' : 'flex';
  if (!shown) nav.style.flexDirection = 'column';
});

// Reveal on scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Little floating tilt on project cards (mouse move)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${(-y*4)}deg) rotateY(${(x*6)}deg) translateZ(6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// gentle pulsing on CTA
const primaryButtons = document.querySelectorAll('.btn.primary');
primaryButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.animate([
      { transform: 'translateY(0) scale(1)' },
      { transform: 'translateY(-4px) scale(1.02)' },
      { transform: 'translateY(0) scale(1)' }
    ], { duration: 420, iterations: 1, easing: 'cubic-bezier(.2,.9,.3,1)' });
  });
});
