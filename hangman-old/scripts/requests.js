// Async/Await Example
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()

        return data.puzzle
    } else {
        throw new Error('Unable to fetch Puzzle!')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        const country = data.find((country) => country.alpha2Code === countryCode)

        return country.name
    } else {
        throw new Error('Unable to fetch country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=cba8fbdff5bd16')

        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch Location')
        }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

// Promise Example
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)

//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })
// })

// Fetch Example
// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }
