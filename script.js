const phone = '16474717278';
const messages = {
  general: "Hi Bake Amor! I'd like to order a cake. Could you please share the options and availability?",
  'custom cake': "Hi Bake Amor! I'd like to discuss a custom cake. Can you help with flavours, sizes, pricing and availability?"
};
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const kind = link.dataset.whatsapp;
  const message = messages[kind] || `Hi Bake Amor! I'm interested in ordering a ${kind}. Could you please share the options, pricing and availability?`;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
