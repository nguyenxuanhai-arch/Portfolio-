// ===== DOM ELEMENTS =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');

// ===== MOBILE NAVIGATION =====
function toggleNavigation() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Toggle mobile navigation
navToggle.addEventListener('click', toggleNavigation);

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===== THEME SWITCHING =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', toggleTheme);

// ===== SMOOTH SCROLLING =====
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Handle navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScrollTo(target);
        updateActiveNavLink(link);
    });
});

// Handle hero button clicks
document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('href');
        smoothScrollTo(target);
    });
});

// ===== ACTIVE NAVIGATION LINK =====
function updateActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

// Update active nav link on scroll
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            updateActiveNavLink(correspondingNavLink);
        }
    });
}

// ===== BACK TO TOP BUTTON =====
function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate skill bars when skills section is visible
                if (entry.target.id === 'skills') {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe all sections and cards
    document.querySelectorAll('section, .project-card, .skill-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ===== SKILL BAR ANIMATIONS =====
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = {};
    
    // Convert FormData to object
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Validate form
    if (validateForm(formObject)) {
        // Show loading state
        showFormLoading(true);
        
        // Simulate form submission
        setTimeout(() => {
            showFormLoading(false);
            showFormSuccess();
            contactForm.reset();
            clearAllErrors();
        }, 2000);
    }
}

function validateForm(data) {
    const { name, email, message } = data;
    let isValid = true;
    
    // Clear previous errors
    clearAllErrors();
    
    // Name validation
    if (!name || name.trim().length < 2) {
        showFieldError('contact-name', 'Please enter a valid name (at least 2 characters).');
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showFieldError('contact-email', 'Please enter a valid email address.');
        isValid = false;
    }
    
    // Message validation
    if (!message || message.trim().length < 10) {
        showFieldError('contact-message', 'Please enter a message (at least 10 characters).');
        isValid = false;
    }
    
    // Subject is optional, no validation needed
    
    return isValid;
}

function validateField(input) {
    const value = input.value.trim();
    const fieldId = input.id;
    
    switch (fieldId) {
        case 'contact-name':
            if (value.length < 2) {
                showFieldError(fieldId, 'Name must be at least 2 characters long.');
                return false;
            }
            break;
        case 'contact-email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(fieldId, 'Please enter a valid email address.');
                return false;
            }
            break;
        case 'contact-message':
            if (value.length < 10) {
                showFieldError(fieldId, 'Message must be at least 10 characters long.');
                return false;
            }
            break;
        // Subject is optional, no validation
    }
    
    clearFieldError(input);
    return true;
}

function showFieldError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const errorElement = document.getElementById(fieldId.replace('contact-', '') + '-error');
    
    if (input && errorElement) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        input.setAttribute('aria-invalid', 'true');
    }
}

function clearFieldError(input) {
    const fieldId = input.id;
    const errorElement = document.getElementById(fieldId.replace('contact-', '') + '-error');
    
    if (input && errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.classList.remove('show');
        input.setAttribute('aria-invalid', 'false');
    }
}

function clearAllErrors() {
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => clearFieldError(input));
}

function showFormLoading(isLoading) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    if (isLoading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.setAttribute('aria-busy', 'true');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.setAttribute('aria-busy', 'false');
    }
}

function showFormSuccess() {
    showFormStatus('Message sent successfully! I\'ll get back to you soon.', 'success');
}

function showFormError(message) {
    showFormStatus(message, 'error');
}

function showFormStatus(message, type) {
    const statusElement = document.getElementById('submit-status');
    
    if (statusElement) {
        statusElement.textContent = message;
        statusElement.className = `form-status ${type} show`;
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            statusElement.classList.remove('show');
        }, 5000);
    }
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: 350px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Close button styles
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 18px;
        padding: 0;
        margin-left: auto;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const texts = ['Full Stack Developer', 'Web Designer', 'Problem Solver', 'Code Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            heroSubtitle.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroSubtitle.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before starting new text
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// ===== PARALLAX EFFECT =====
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===== SCROLL EVENT HANDLER =====
function handleScroll() {
    updateNavOnScroll();
    toggleBackToTop();
}

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== INITIALIZE EVERYTHING =====
function init() {
    initTheme();
    initScrollAnimations();
    initContactForm();
    initTypingAnimation();
    initParallaxEffect();
    
    // Add throttled scroll listener
    window.addEventListener('scroll', throttle(handleScroll, 16));
    
    // Add resize listener for responsive adjustments
    window.addEventListener('resize', () => {
        // Close mobile menu on resize
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
}

// ===== START WHEN DOM IS LOADED =====
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ===== ADDITIONAL FEATURES =====

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add loading screen (optional)
function showLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading...</p>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loader);
    
    // Hide loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            }, 500);
        }, 500);
    });
}

// Initialize loading screen
// showLoadingScreen();

// Console message for developers
console.log(`
🚀 Portfolio Website
Built with ❤️ using HTML, CSS & JavaScript

Features:
✅ Responsive Design
✅ Dark/Light Theme
✅ Smooth Scrolling
✅ Scroll Animations
✅ Contact Form
✅ Mobile Navigation

Feel free to explore the code!
`);

// Export functions for potential module use
window.PortfolioApp = {
    smoothScrollTo,
    toggleTheme,
    showNotification
};