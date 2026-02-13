document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.carousel-image'));
  const dots = Array.from(carousel.querySelectorAll('.dot'));
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  if (slides.length <= 1) {
    prev?.setAttribute('hidden', '');
    next?.setAttribute('hidden', '');
    return;
  }

  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
    });
  };

  prev?.addEventListener('click', () => showSlide(current - 1));
  next?.addEventListener('click', () => showSlide(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));
});
