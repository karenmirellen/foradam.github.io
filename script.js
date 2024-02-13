const showLetterBtn = document.getElementById('show-letter-btn');
const showHeartsBtn = document.getElementById('show-hearts-btn');
const loveLetter = document.querySelector('.love-letter');

showLetterBtn.addEventListener('click', function() {
    if (loveLetter.style.display === 'none' || loveLetter.style.display === '') {
        loveLetter.style.display = 'block';
    } else {
        loveLetter.style.display = 'none';
    }
});

showHeartsBtn.addEventListener('click', function() {
    createHearts();
});

function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts-container');
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
    }

    document.body.appendChild(heartsContainer);

    setTimeout(() => {
        heartsContainer.remove();
    }, 5000); // Remove hearts after 5 seconds
}
