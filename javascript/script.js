// Text Reveal Animation Observer
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('text-reveal-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.text-reveal').forEach(el => {
    observer.observe(el);
  });

  // Cursor Trailer Effect
  const trailer = document.createElement('div');
  trailer.classList.add('trailer');
  document.body.appendChild(trailer);
  
  document.addEventListener('mousemove', e => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;
    
    trailer.animate({
      transform: `translate(${x}px, ${y}px)`
    }, { duration: 500, fill: 'forwards' });
  });
});