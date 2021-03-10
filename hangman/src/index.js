import "core-js/stable";
import "regenerator-runtime/runtime";
import Hangman from './hangman';
import getPuzzle from './requests';

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
let game1

const render = () => {
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter

        puzzleElement.appendChild(letterElement)
    })
}

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const startGame = async () => {
    const puzzle = await getPuzzle('1')
    game1 = new Hangman(puzzle, 10)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
