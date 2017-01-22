import * as api from '../../api'

export const LIST_TODOS = 'LIST_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const FETCHING_TODOS = 'FETCHING_TODOS'

export function listTodos() {
    return (dispatch, getState) => {
        dispatch({
            type: FETCHING_TODOS
        })

        return api.fetchTodos()
            .then(response => {
                dispatch({
                    type: LIST_TODOS,
                    payload: response
                })
            })
    }
}

export const addTodo = (todoName) => (dispatch) =>
    api.addTodo(todoName).then(response => {
        dispatch({
            type: ADD_TODO,
            payload: response
        })
    })

export function completeTodo(todo) {
    return (dispatch, getState) =>
        api.completeTodo(todo.id)
            .then(response => {
                dispatch({
                    type: COMPLETE_TODO,
                    payload: response.id
                })
            })
}
