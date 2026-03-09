/* ============================================================
   CTVITAL — JAVASCRIPT PRINCIPAL
   ============================================================ */

// ---- Menú mobile (hamburguesa) ----
const menuToggle = document.getElementById('menu-toggle');
const navMenu    = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Cerrar el menú al hacer click en un link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}

// ---- Cerrar menú al hacer scroll ----
window.addEventListener('scroll', () => {
  if (navMenu) navMenu.classList.remove('open');
});
