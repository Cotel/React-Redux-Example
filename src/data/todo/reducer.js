import {List} from 'immutable'
import {LIST_TODOS, ADD_TODO, COMPLETE_TODO} from './actions'

const INITIAL_STATE = {
    list: List([]),
    filter: 'all'
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_TODOS: {
            return state
        }

        case ADD_TODO: {
            const newList = state.list.push({
                id: state.list.size + 1,
                name: action.payload,
                completed: false
            })
            return {...state, list: newList}
        }

        case COMPLETE_TODO: {
            const newList = state.list.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {id: todo.id, name: todo.name, completed: true}
                } else {
                    return todo
                }
            })
            return {...state, list: newList}
        }

        default: {
            return state
        }
    }
}
