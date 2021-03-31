import { getTodos, toggleTodo, removeTodo } from './todos';
import { getFilters } from './filters';

// Render app todos based on filter
const renderTodos = () => {
    const todoElelment = document.querySelector('#todos');
    const { searchText, hideCompleted } = getFilters();
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
        const hideCompletedMatch = !hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    todoElelment.innerHTML = '';
    todoElelment.appendChild(generateSummaryDOM(incompleteTodos));

    if (filteredTodos.length === 0) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('empty-message');
        messageElement.textContent = 'No Todos to show:(';
        todoElelment.appendChild(messageElement);
    } else {
        filteredTodos.forEach((todo) => {
            todoElelment.appendChild(generateTodoDOM(todo));
        })
    }
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('label'); // parent
    const container = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox'); // Setup checkbox
    checkbox.checked = todo.completed;
    container.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id);
        renderTodos();
    })

    todoText.textContent = todo.text; // Setup text output
    container.appendChild(todoText);

    todoElement.classList.add('list-item'); // Setup Container
    container.classList.add('list-item__container');
    todoElement.appendChild(container);

    removeButton.textContent = 'Delete'; // Setup Delete button
    removeButton.classList.add('button', 'button--text');

    todoElement.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        renderTodos();
    })

    return todoElement;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    const taskText = (incompleteTodos.length === 1) ? 'task' : 'tasks';

    summary.classList.add('list-title');
    summary.textContent = `You got ${incompleteTodos.length} ${taskText} to do!`;
    return summary;
}

export { generateTodoDOM, renderTodos, generateSummaryDOM }
