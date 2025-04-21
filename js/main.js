// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile navigation toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

navSlide();

// Scroll header style change
const header = document.querySelector('header');
const scrollChange = 100;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition >= scrollChange) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const nav = document.querySelector('.nav-links');
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                document.querySelector('.burger').classList.remove('toggle');
            }
        }
    });
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to your backend
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        
        button.textContent = 'Message Sent!';
        button.style.backgroundColor = '#27ae60';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after delay
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 3000);
    });
}

// Intersection Observer for fade-in animations
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

document.querySelectorAll('.about-text, .service-card, .work-item').forEach(el => {
    el.classList.add('fade-in');
    appearOnScroll.observe(el);
});