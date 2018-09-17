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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    console.log(data)
  } else if (e.target.readyState === 4) {
    console.log('An error has taken place')
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()

// 1. Make a new request for all the countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country object by it's country code
// 4. Print the full country name

const countryCode = "US"
const countyRequest = new XMLHttpRequest

countyRequest.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const country = data.find((country) => country.alpha2Code === countryCode)
    console.log(country.name)
  }
})

countyRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
countyRequest.send()

