const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 3)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error is : ${err}`);
})

getCountry('UA').then((country) => {
    console.log(`Country is: ${country}`);
}).catch((error) => {
    console.log(`Error: ${error}`);
})
