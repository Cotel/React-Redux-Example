import {List} from 'immutable'
import {LIST_TODOS, ADD_TODO, COMPLETE_TODO, FETCHING_TODOS} from './actions'

const INITIAL_STATE = {
    list: List([]),
    filter: 'all',
    isLoading: false
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_TODOS: {
            return {...state, isLoading: true}
        }

        case LIST_TODOS: {
            return {...state, list: List(action.payload), isLoading: false}
        }

        case ADD_TODO: {
            const newList = state.list.push(action.payload)
            return {...state, list: newList}
        }

        case COMPLETE_TODO: {
            const newList = state.list.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
            return {...state, list: newList}
        }

        default: {
            return state
        }
    }
}
