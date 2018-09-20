const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch new puzzle')
    }
  })
}

const getCountry = (countryCode) => {
  return fetch('https://restcountries.eu/rest/v2/all').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch data')
    }
  }).then((data) => {
    return country = data.find((country) => country.alpha2Code === countryCode)
  })
}

const getLocation = () => {
  return fetch('http://ipinfo.io/json?token=dbec9c356824ae').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('unable to fetch location')
    }
  })
}