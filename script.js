// Travel Recommendation Website - JavaScript Functionality

// Console log to verify script is loaded
console.log("TravelGuide website loaded successfully!");
console.log("Welcome to your next adventure!");

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    // Initialize functionality
    initializeNavigation();
    initializeContactForm();
    initializeImageInteractions();
    logPageInfo();
});

// Navigation Enhancement
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log(`Navigation: User clicked on ${this.textContent}`);
        });
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        console.log("Contact form found - initializing form handler");
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log("Form submitted with data:", formData);
            
            // Validate email
            if (validateEmail(formData.email)) {
                handleFormSubmission(formData);
            } else {
                showFormMessage("Please enter a valid email address.", "error");
            }
        });
        
        // Add input validation feedback
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                if (this.value && !validateEmail(this.value)) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
        }
    }
}

// Email Validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Handle Form Submission
function handleFormSubmission(formData) {
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission (in a real scenario, this would send to a server)
    setTimeout(() => {
        console.log("Form processed successfully");
        console.log("User details:", formData.name, formData.email);
        
        // Show success message
        showFormMessage(
            `Thank you, ${formData.name}! Your message has been received. We'll get back to you at ${formData.email} soon.`,
            "success"
        );
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            if (formMessage) {
                formMessage.style.display = 'none';
            }
        }, 5000);
    }, 1500);
}

// Show Form Message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        console.log(`Form message displayed: ${message} (${type})`);
    }
}

// Image Interaction Effects
function initializeImageInteractions() {
    const images = document.querySelectorAll('.recommendation-images img');
    
    images.forEach((img, index) => {
        // Log when image is clicked
        img.addEventListener('click', function() {
            console.log(`Image clicked: ${this.alt || 'Image ' + (index + 1)}`);
            
            // Add a subtle pulse effect
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
        
        // Log when image loads
        img.addEventListener('load', function() {
            console.log(`Image loaded successfully: ${this.alt || 'Image ' + (index + 1)}`);
        });
        
        // Handle image load errors
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            this.alt = 'Image not available';
            this.style.backgroundColor = '#ecf0f1';
        });
    });
}

// Log Page Information
function logPageInfo() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    console.log(`Current page: ${currentPage}`);
    console.log(`Page title: ${document.title}`);
    console.log(`Total images on page: ${document.querySelectorAll('img').length}`);
    console.log(`Total links on page: ${document.querySelectorAll('a').length}`);
}

// Smooth Scroll Enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log(`Smooth scrolling to: ${this.getAttribute('href')}`);
        }
    });
});

// Page Load Performance Logging
window.addEventListener('load', function() {
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

// Track user activity (for analytics purposes)
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        console.log(`User scrolled to: ${Math.round(scrollPercentage)}% of page`);
    }, 500);
});

// Export functions for potential future use
window.TravelGuide = {
    validateEmail: validateEmail,
    showFormMessage: showFormMessage,
    version: '1.0.0',
    author: 'TravelGuide Team'
};

console.log("TravelGuide JavaScript initialized - Version 1.0.0");