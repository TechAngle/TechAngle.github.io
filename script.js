document.querySelector('.scroll-btn').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Optional: Add more interactive animations
window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.goal-card');
    let windowHeight = window.innerHeight;
    elements.forEach(function (element) {
        let positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            element.style.animation = 'slideInFromBottom 1s ease-in-out forwards';
        }
    });
});
