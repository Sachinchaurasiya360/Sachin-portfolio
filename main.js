// Typing Animation
function typeText() {
    const element = document.querySelector('.typewriter');
    if (!element) return;
    
    const text = "I'm Sachin Chaurasiya";
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Achievement Stats Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    if (isNaN(target)) {
        console.error('Invalid data-count value:', element.getAttribute('data-count'));
        return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const current = Math.floor(progress * target);
        element.textContent = current + (progress === 1 ? '+' : '');

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Initialize counters when they come into view
function observeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counter.textContent = '0';
        observer.observe(counter);
    });
}

// Initialize AOS for achievement items
function initAchievements() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
}

// Initialize EmailJS
(function() {
    emailjs.init("fybrVUXzlaLXc_fRJ");
    console.log('EmailJS initialized');
})();

// Handle contact form submission
function handleContactFormSubmit(event) {
    event.preventDefault();
    console.log('Form submission started');

    // Get form elements
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Get form data
    const formData = {
        name: form.querySelector('#name').value,
        email: form.querySelector('#email').value,
        projectType: form.querySelector('#project-type').value,
        message: form.querySelector('#message').value
    };

    console.log('Form data:', formData);

    // Prepare template parameters
    const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'Sachin'
    };

    console.log('Template params:', templateParams);

    // Send email using EmailJS
    emailjs.send(
        'service_rdbk4lb',
        'template_101frog',
        templateParams
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
        form.reset();
    })
    .catch(function(error) {
        console.error('FAILED...', error);
        // More detailed error message
        let errorMessage = 'Failed to send message. ';
        if (error.text) {
            errorMessage += error.text;
        } else {
            errorMessage += 'Please try again later.';
        }
        showFormMessage(errorMessage, 'error');
    })
    .finally(function() {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
}

// Function to show form messages
function showFormMessage(message, type) {
    console.log(`Showing ${type} message:`, message);
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    const form = document.querySelector('.contact-form');
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    form.appendChild(messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add contact form submission handler
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        console.log('Contact form found, adding submit handler');
        contactForm.addEventListener('submit', handleContactFormSubmit);
    } else {
        console.error('Contact form not found!');
    }

    typeText();
    observeCounters();
    initAchievements();
});
