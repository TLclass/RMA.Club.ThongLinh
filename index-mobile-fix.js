(() => {
  const applyMobileOverflowGuard = () => {
    if (window.innerWidth > 760) return;

    const excluded = '.banner-slides, .banner-slide, .tall-track, .tall-item';
    document.querySelectorAll('.home-main *').forEach((element) => {
      if (element.matches(excluded) || element.closest('.tall-carousel, .banner-stage')) return;

      const styles = window.getComputedStyle(element);
      if (styles.position === 'fixed' || styles.position === 'absolute') return;

      if (element.scrollWidth > element.clientWidth + 2) {
        element.classList.add('mobile-overflow-guard');
      }
    });
  };

  window.addEventListener('load', applyMobileOverflowGuard, { once: true });
  window.addEventListener('resize', applyMobileOverflowGuard);
})();
