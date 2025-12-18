document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.profile-card');
    const container = document.querySelector('.hero');

    // Simple 3D Tilt Effect on Mouse Move
    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on Mouse Leave
    container.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.5s ease';
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });

    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
        // Pop effect
        card.style.transform = 'translateZ(20px)';
    });

    console.log("Portfolio Amira Ready!");
});
