// Modern effects and interactions for Daniela's Portfolio

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Intersection Observer for scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.proyecto-card, .proyecto-dos, .habilidad-categoria, .section').forEach(el => {
  el.classList.add('reveal-on-scroll');
  observer.observe(el);
});

// Parallax effect on hero (disabled to prevent z-index issues)
// window.addEventListener('scroll', () => {
//   const hero = document.querySelector('.hero');
//   if (hero) {
//     const scrollY = window.scrollY;
//     hero.style.transform = `translateY(${scrollY * 0.3}px)`;
//   }
// });

// Magnetic button effect on hover
document.querySelectorAll('.btn, .contact-pill').forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.setProperty('--mouse-x', '0px');
    button.style.setProperty('--mouse-y', '0px');
  });
});

// Ripple click feedback for buttons (also supports keyboard activation)
function createRipple(e) {
  const btn = e.currentTarget || e.target;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';

  const size = Math.max(rect.width, rect.height) * 1.6;
  ripple.style.width = ripple.style.height = `${size}px`;

  let clientX = e.clientX;
  let clientY = e.clientY;

  // If triggered by keyboard, center the ripple
  if (e.type === 'keydown' || (typeof clientX === 'undefined')) {
    clientX = rect.left + rect.width / 2;
    clientY = rect.top + rect.height / 2;
  }

  ripple.style.left = `${clientX - rect.left - size / 2}px`;
  ripple.style.top = `${clientY - rect.top - size / 2}px`;

  btn.appendChild(ripple);
  setTimeout(() => {
    ripple.remove();
  }, 650);
}

['click'].forEach(evt => {
  document.querySelectorAll('.btn, .contact-pill, .pill-btn, .filter-btn').forEach(el => {
    el.addEventListener(evt, createRipple);
  });
});

// keyboard activation for ripple (Enter / Space)
document.querySelectorAll('.btn, .contact-pill, .pill-btn, .filter-btn').forEach(el => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      createRipple(e);
    }
  });
});

// Active nav link highlighting on scroll
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Cursor glow effect (optional)
document.addEventListener('mousemove', (e) => {
  const glow = {
    x: e.clientX,
    y: e.clientY
  };
  
  // You could use this for custom cursor effects
  document.documentElement.style.setProperty('--cursor-x', `${glow.x}px`);
  document.documentElement.style.setProperty('--cursor-y', `${glow.y}px`);
});

// Pills animation stagger
const pills = document.querySelectorAll('.pill-btn');
pills.forEach((pill, index) => {
  pill.style.animationDelay = `${index * 0.1}s`;
});

// Project filter smooth transitions
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    // Fade out and in animation handled by CSS
    document.querySelectorAll('.proyecto-card, .proyecto-dos').forEach(card => {
      card.style.animation = 'fadeOut 0.2s ease';
      setTimeout(() => {
        card.style.animation = 'fadeIn 0.3s ease';
      }, 200);
    });
  });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mainNav = document.getElementById('mainNav');
    if (mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
    }
  }
});

// Dynamic scroll progress indicator
const createScrollProgress = () => {
  const scroll = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scroll / docHeight) * 100;
  
  // Can be used to style a progress bar if needed
  document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
};

window.addEventListener('scroll', createScrollProgress);
