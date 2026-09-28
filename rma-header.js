document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.rma-site-header');
  if (!header) return;

  const toggle = header.querySelector('.rma-menu-toggle');
  const nav = header.querySelector('.rma-nav');
  const icon = toggle?.querySelector('i');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('show');
    toggle.setAttribute('aria-expanded', String(open));
    icon?.classList.toggle('fa-bars', !open);
    icon?.classList.toggle('fa-xmark', open);
  });
});
