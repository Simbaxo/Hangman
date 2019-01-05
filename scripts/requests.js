const getPuzzle = async (wordCount) => {
  const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    // return data
    return data.puzzle
  } else {
    throw new Error('Unable to fetch new puzzle')
  }
}

const getCurrentCountry = async () => {
  const location = await getLocation()
  const country = await getCountry(location.country)
  return country
}

const getCountry = async (countryCode) => {
  const response = await fetch('//restcountries.eu/rest/v2/all')

  if (response.status === 200) {
    const data = await response.json()
    return country = data.find((country) => country.alpha2Code === countryCode)
  } else {
    throw new Error('Unable to fetch data')
  }
}

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=dbec9c356824ae')

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('unable to fetch location')
  }
}