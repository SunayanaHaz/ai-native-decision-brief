// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// Observe cards for staggered animations
document.querySelectorAll('.app-card, .benefit-card, .recommendation-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 14, 20, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 14, 20, 0.9)';
    }
});

// Add hover effect to timeline markers
document.querySelectorAll('.timeline-marker').forEach(marker => {
    marker.addEventListener('mouseenter', () => {
        marker.style.transform = 'scale(1.1)';
        marker.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.5)';
    });
    
    marker.addEventListener('mouseleave', () => {
        marker.style.transform = 'scale(1)';
        marker.style.boxShadow = 'none';
    });
});

// Parallax effect for hero visual
window.addEventListener('scroll', () => {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const scrolled = window.scrollY;
        heroVisual.style.transform = `translateY(calc(-50% + ${scrolled * 0.3}px))`;
    }
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = 'var(--color-text-secondary)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--color-accent)';
        }
    });
});

console.log('AI-Native Software Engineering site loaded successfully! 🚀');
console.log('Content reorganized to match PowerPoint presentation flow');
