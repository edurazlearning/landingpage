// Page loader: hide when ready and reveal body (index only)
(function() {
    var loader = document.getElementById('page-loader');
    function hideLoader() {
        if (!loader) return;
        loader.classList.add('hidden');
        document.body.classList.add('page-ready');
    }
    if (!loader) return;
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 520);
    } else {
        window.addEventListener('load', function() { setTimeout(hideLoader, 520); });
    }
})();

// Load Example - Scroll to phone preview
function loadExample(button) {
    // Scroll to preview section (phone mockup)
    document.querySelector('.preview-section').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqCards = document.querySelectorAll('.faq-card');
    
    faqCards.forEach(card => {
        const question = card.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                const isActive = card.classList.contains('active');
                
                // Close all FAQ cards
                faqCards.forEach(c => c.classList.remove('active'));
                
                // Open clicked card if it wasn't active
                if (!isActive) {
                    card.classList.add('active');
                }
            });
        }
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
    });
    
    // Observe cards with staggered animation
    document.querySelectorAll('.card').forEach((card, index) => {
        observer.observe(card);
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Nav scroll effect
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
});
