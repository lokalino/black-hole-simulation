document.addEventListener('DOMContentLoaded', function() {
    const blackHoles = document.querySelectorAll('.black-hole');

    blackHoles.forEach(blackHole => {
        blackHole.addEventListener('click', function() {
            if (blackHole.style.animationPlayState === 'paused') {
                blackHole.style.animationPlayState = 'running';
            } else {
                blackHole.style.animationPlayState = 'paused';
            }
        });
    });
});
