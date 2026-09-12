export function initNavigation() {
  const header = document.getElementById('siteHeader') || document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });
  }

  // Smooth scroll for anchor links with header offset
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex !== -1) {
        const targetId = href.substring(hashIndex + 1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}
