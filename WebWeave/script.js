// Handle form fade-in on scroll
window.addEventListener('scroll', function() {
    const form = document.querySelector('.form-container');
    const formPosition = form.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (formPosition < screenPosition) {
        form.style.opacity = '1';
    }

    // Handle floor plan card animation
    const card = document.querySelector('.floor-plan-card');
    const cardPosition = card.getBoundingClientRect().top;

    if (cardPosition < screenPosition) {
        card.classList.add('animate');
    }
});

// Handle Building Features Slider
const featuresCards = document.querySelector('.features-cards');
const featureCards = document.querySelectorAll('.feature-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateSlider() {
    featuresCards.style.transform = `translateX(-${currentIndex * 100}%)`;
    featureCards.forEach((card, index) => {
        if (index === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < featureCards.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first card
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = featureCards.length - 1; // Loop to the last card
    }
    updateSlider();
});

// Initialize the slider
updateSlider();