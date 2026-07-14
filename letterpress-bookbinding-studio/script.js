// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Stamp button: adds a lingering "inked" state briefly after click,
// so the flood-fill animation is visible even on a quick tap.
document.querySelectorAll('.stamp-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.add('is-stamped');
    setTimeout(() => btn.classList.remove('is-stamped'), 500);
  });
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Contact form: front-end only demo — confirms receipt without a backend.
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = contactForm.querySelector('.form-note');
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    note.textContent = name
      ? `Thanks, ${name} — we'll write back within a day or two.`
      : `Thanks — we'll write back within a day or two.`;
    contactForm.reset();
  });
}