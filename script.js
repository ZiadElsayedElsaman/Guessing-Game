'use strict';

let random_num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.number').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === random_num) {
        document.querySelector('.message').textContent = '🎉 Correct Guess!';
        document.querySelector('.display-correct-result').textContent =
            document.querySelector('.number').value;
        document.body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.backgroundColor = 'transparent';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    } else if (guess !== random_num) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess < random_num ? 'Too Low!' : 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    random_num = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing ....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').value = '';
    document.querySelector('.display-correct-result').textContent = '?';
    document.body.style.backgroundColor = '#222';
});