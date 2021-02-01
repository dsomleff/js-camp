'use strict'

// Fetch existed todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//Save todos to the localStorage
const saveTodos = (todos) => { 
    localStorage.setItem('todos', JSON.stringify(todos)) 
}

// Render app todos based on filter
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => { 
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove todo by id
const removeTodo = ((id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
})

// Toggle the completed value for a given todo
const toggleTodo = ((id) => {
    const checked = todos.find((todo) => todo.id === id)

    if (checked) {
        checked.completed = !checked.completed
    }
})

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div') // parent
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    checkbox.setAttribute('type', 'checkbox') // Setup checkbox
    checkbox.checked = todo.completed
    todoElement.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    todoText.textContent = todo.text // Setup text output
    todoElement.appendChild(todoText)

    removeButton.textContent = 'x' // Setup button
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoElement
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You got ${incompleteTodos.length} task to do!`
    return summary
}
