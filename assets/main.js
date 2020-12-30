'use strict';

let activePlayer = 'player1';
let fieldArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

const writer = (ev) => {
    let field = ev.target;
    let fieldID = ev.target.id;
    console.log(field, fieldID)
}

const initGame = () => {
    const allFields = document.querySelectorAll('.field');
    const playerLine = document.querySelector('.playerline');
    const upperLine = document.querySelector('.upperline');
    allFields.forEach(field => field.classList.remove('.disabled'));
    allFields.forEach(field => field.addEventListener('click', writer));
    upperLine.textContent = 'Next move:';
    playerLine.textContent = 'Player 1 (X)';  
}

const startButton = document.querySelector('.starter');
startButton.addEventListener('click', initGame);
