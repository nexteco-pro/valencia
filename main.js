document.addEventListener('DOMContentLoaded', () => {
  // Typed headline
  new Typed('#typed-headline', {
    strings: ['Transforma Tu Negocio', 'Moderniza Tu Tecnología', 'Impulsa Tu Crecimiento'],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    cursorChar: '|'
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const top = target.offsetTop - 70;
        window.scrollTo({top, behavior: 'smooth'});
      }
    });
  });

  // Validación simple del formulario
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.checkValidity()) {
      // Guardar en localStorage (demo)
      const data = Object.fromEntries(new FormData(form));
      const subs = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      subs.push({...data, date: new Date().toISOString()});
      localStorage.setItem('contactSubmissions', JSON.stringify(subs));
      // Mostrar éxito
      form.classList.add('d-none');
      document.getElementById('successMessage').classList.remove('d-none');
    } else {
      form.classList.add('was-validated');
    }
  });

  // Año actual en footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
