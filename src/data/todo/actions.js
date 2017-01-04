export const LIST_TODOS = 'LIST_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

export function listTodos() {
    return {
        type: LIST_TODOS
    }
}

export function addTodo(todoName) {
    return {
        type: ADD_TODO,
        payload: todoName
    }
}

export function completeTodo(todo) {
    return {
        type: COMPLETE_TODO,
        payload: todo
    }
}
