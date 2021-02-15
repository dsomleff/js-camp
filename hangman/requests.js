// Fetch Example
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch country')
        }
    }).then((data) => {
        const country = data.find((country) => country.alpha2Code === countryCode)

        return country.name
    })
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
