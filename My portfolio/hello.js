// Navbar Scroll & Burger Menu
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
      // Close mobile menu
      navLinks.classList.remove('active');
    }
  });
});

// Animation on Scroll
const animateElements = () => {
  const reveals = document.querySelectorAll('[data-animated], .section-title, .progress-bar, .skill-bar');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      if (el.classList.contains('progress-bar')) {
        const skill = el.parentElement.parentElement.getAttribute('data-skill');
        el.style.width = skill;
      } else {
        el.classList.add('visible');
      }
    }
  });
};

window.addEventListener('scroll', animateElements);
window.addEventListener('load', animateElements);

// Contact Form Submission (Demo)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').innerHTML = "Thank you! Your message has been sent.";
  this.reset();
  setTimeout(() => {
    document.getElementById('formStatus').innerHTML = "";
  }, 3000);
});