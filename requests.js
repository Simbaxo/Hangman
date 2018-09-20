const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch new puzzle')
    }
  })
}

const getCountry = (countryCode) => new Promise((resolve, reject) => {
  const countyRequest = new XMLHttpRequest

  countyRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText)
      const country = data.find((country) => country.alpha2Code === countryCode)
      resolve(country)
    } else if (e.target.readyState === 4) {
      reject('Unable to fetch data')
    }
  })

  countyRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
  countyRequest.send()
})