'use strict';

const playerLine = document.querySelector('.playerline');
const upperLine = document.querySelector('.upperline');
const allFields = document.querySelectorAll('.field');
let activePlayer;
let stepCounter;
let fieldArray;

function checkWin() {
    let win = false;
    if (fieldArray[0] === fieldArray[1] && fieldArray[1] === fieldArray[2]) {
        win = true;
    }
    if (fieldArray[3] === fieldArray[4] && fieldArray[4] === fieldArray[5]) {
        win = true;
    }
    if (fieldArray[6] === fieldArray[7] && fieldArray[7] === fieldArray[8]) {
        win = true;
    }
    if (fieldArray[0] === fieldArray[3] && fieldArray[3] === fieldArray[6]) {
        win = true;
    }
    if (fieldArray[1] === fieldArray[4] && fieldArray[4] === fieldArray[7]) {
        win = true;
    }
    if (fieldArray[2] === fieldArray[5] && fieldArray[5] === fieldArray[8]) {
        win = true;
    }
    if (fieldArray[0] === fieldArray[4] && fieldArray[4] === fieldArray[8]) {
        win = true;
    }
    if (fieldArray[2] === fieldArray[4] && fieldArray[4] === fieldArray[6]) {
        win = true;
    }

    if (win) {
        let winner;
        activePlayer === 'player1' ? winner = 'Player 2 (0)' : winner = 'Player 1 (X)';
        endGame(winner, true);
    }
    if (stepCounter === 9 && !win) {
        endGame('This was a draw', false);
    }
}

function endGame(winner, notDraw) {
    document.querySelector('.players').classList.add('green');
    if (notDraw) {
        upperLine.textContent = 'The winner is:';
        playerLine.textContent = winner;
        allFields.forEach(field => field.removeEventListener('click', writer));
    } else {
        upperLine.textContent = winner;
        playerLine.textContent = '';
    }
}


const writer = (ev) => {
    let field = ev.target;
    let fieldID = ev.target.id;
    field.removeEventListener('click', writer);
    if (activePlayer === 'player1') {
        field.textContent = 'X';
        fieldArray[fieldID] = 'X';
        activePlayer = 'player2';
        playerLine.textContent = 'Player 2 (0)';
    } else {
        field.textContent = '0';
        fieldArray[fieldID] = '0';
        activePlayer = 'player1'
        playerLine.textContent = 'Player 1 (X)';
    }
    stepCounter++;
    checkWin();
}

const initGame = () => {
    stepCounter = 0;
    fieldArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    activePlayer = 'player1';
    allFields.forEach(field => field.textContent = '');
    allFields.forEach(field => field.addEventListener('click', writer));
    document.querySelector('.players').classList.remove('green');
    upperLine.textContent = 'Next move:';
    playerLine.textContent = 'Player 1 (X)';
}

const startButton = document.querySelector('.starter');
startButton.addEventListener('click', initGame);
