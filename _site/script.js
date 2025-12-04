document.addEventListener('DOMContentLoaded', function() {

    // --- Typing Effect ---
    const typingTextElement = document.querySelector('.typing-text');
    const phrases = [
        "Studying Cybersecurity...",
        "Working as a Defender.",
        "Studying Programming...",
        "Analyzing Vulnerabilities.",
        "Studying Networks...",
        "Hardening Systems.",
        "Studying Malware Analysis...",
        "Scripting in Python."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            // Deleting
            typingTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        } else {
            // Typing
            typingTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                // Pause at the end of the phrase
                setTimeout(type, 1500);
                return;
            }
        }
        // Speed of typing/deleting
        const typeSpeed = isDeleting ? 50 : 120;
        setTimeout(type, typeSpeed);
    }

    // --- Scroll Animation ---
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Start the typing effect after a short delay
    setTimeout(type, 500);
});