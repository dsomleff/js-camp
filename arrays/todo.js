const todos = [
    {
        text: 'Learn Js',
        completed: false
    },
    {
        text: 'Love Ju',
        completed: true
    },
    {
        text: 'Feed the cat',
        completed: false
    },

    {
        text: 'Make job done',
        completed: true
    },
]

const deleteTodo = (todos, text) => {
    const index = todos.findIndex((todo) => todo.text.toLowerCase() === text.toLowerCase())
    if (index > -1) todos.splice(index, 1)
}

const getIncompleted = ((todos) => {
    return todos.filter((todo) => !todo.completed)
})

const sortTodos = (todos) => {
    todos.sort((a, b) => {
        if (!a.completed && b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos);

// console.log(getIncompleted(todos));

// deleteTodo(todos, 'feed the cat')
// console.log(todos);

