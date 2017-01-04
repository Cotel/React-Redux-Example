import {LIST_TODOS} from './actions'

const INITIAL_STATE = {
    list: [{name: 'Test', completed: false}],
    filter: 'all'
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_TODOS: {
            return state
        }

        default: {
            return state
        }
    }
}