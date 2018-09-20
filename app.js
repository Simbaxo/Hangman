// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Cat Dog', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle('2').then((data) => {
  console.log(data.puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

// // Making an HTTP request

getLocation().then((location) => {
  console.log(`You are currently in ${location.city}, ${location.region} ${location.country}.`)
  return getCountry(location.country)
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`)
})