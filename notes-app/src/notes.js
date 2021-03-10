import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

let notes = [];

// Read existing notes from localStorage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// Save the notes to localStorage
const saveNote = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

const getNotes = () => notes; // expose notes from module

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })

    saveNote()

    return id
}

// Remove note from the list
const removeNote = ((id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
        saveNote()
    }
})

// Sort your notes by one of the 3 ways
const sortNotes = ((sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byAlphabet') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
})

const updateNote = (id, updates) => {
    const note = notes.find(note => note.id === id);

    if (!note) {
        return;
    }

    if (typeof updates.title === 'string') {
        note.title = updates.title;
        note.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        note.body = updates.body;
        note.updatedAt = moment().valueOf()
    }

    saveNote();
    return  note
}

notes = loadNotes();

export { getNotes, createNote, removeNote, sortNotes, updateNote }
