const notes = [
    {
        title: 'My next trip',
        body: 'I gonna be in Odesa'
    },
    {
        title: 'Learn JS',
        body: 'Use to it'
    },
    {
        title: 'Feed the cat',
        body: 'Pray to new machine'
    }
]

const sortFunction = (notes) => {
    notes.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortFunction(notes)
console.log(notes);

// const findNote = (notes, noteTitle) => {
//      const index = notes.findIndex((note) => note.title.toLowerCase() === noteTitle.toLowerCase())
//      return notes[index]
// }

// const findNote = (notes, noteTitle) => {
//     return notes.find(
//         (note) => note.title.toLowerCase() === noteTitle.toLowerCase()
//     )
// }

// const note = findNote(notes, 'feed the Cat')
// console.log(typeof note);

// const findNotes = ((notes, query) => {
//     return notes.filter((note) => note.title.toLowerCase() === query.toLowerCase())
// })

// const findNotes = ((notes, query) => {
//     return notes.filter((note) => {
//         const isTitleOk = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyOk = note.body.toLowerCase().includes(query.toLowerCase())

//         return isTitleOk || isBodyOk
//     })
// })
// console.log(findNotes(notes, 'ne'));



