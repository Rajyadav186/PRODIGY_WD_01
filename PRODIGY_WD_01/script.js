// script.js

// Change navbar style on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    
    // Add 'scrolled' class when scrolled down
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  