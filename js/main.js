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

// ---- Mercado Pago: switch sandbox ----
const btnPago = document.getElementById('btn-pago');
if (btnPago && new URLSearchParams(window.location.search).get('env') === 'sandbox') {
  btnPago.href = 'https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=425929776-0c58f0fc-3658-4d68-a7fd-c5c7f0930ed0';
}
