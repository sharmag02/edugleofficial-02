const toggles2 = document.querySelectorAll('.faq-toggle');

toggles2.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
