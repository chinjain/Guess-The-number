// Import stylesheets
import './style.css';

// Write Javascript code!
let randNum = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

function guessCheck() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'previous Guesse:';
  }

  guesses.textContent += userGuess + ' ';
  if (userGuess === randNum) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!Game Over!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randNum) {
      lowOrHi.textContent = 'Last Guess was too low!';
    } else if (userGuess > randNum) {
      lowOrHi.textContent = ' Last Guess was too high!';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', guessCheck);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const restParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < restParas.length; i++) {
    restParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randNum = Math.floor(Math.random() * 100) + 1;
}
