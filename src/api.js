import {v4} from 'node-uuid'

const fakeDatabase = {
    todos: [
        {
            id: v4(),
            name: "Test 1",
            completed: false
        },
        {
            id: v4(),
            name: "Test 2",
            completed: false
        },
        {
            id: v4(),
            name: "Test 3",
            completed: true
        }
    ]
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export function addTodo(text) {
    return delay(500).then(() => {
        const todo = {
            id: v4(),
            name: text,
            completed: false
        }
        fakeDatabase.todos.push(todo)
        return todo
    })
}

export function fetchTodos() {
    return delay(500).then(() => {
        console.log(fakeDatabase.todos)
        return fakeDatabase.todos
    })
}

export function completeTodo(id) {
    return delay(200).then(() => {
        const todo = fakeDatabase.todos.find(todo => todo.id === id);
        todo.completed = !todo.completed
        return todo
    })
}