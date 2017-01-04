import {LIST_TODOS, ADD_TODO, COMPLETE_TODO} from './actions'

const INITIAL_STATE = {
    list: [{id: 1, name: 'Test', completed: false}],
    filter: 'all'
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_TODOS: {
            return state
        }

        case ADD_TODO: {
            const newList = state.list.slice()
            newList.push({
                id: newList.length + 1,
                name: action.payload,
                completed: false
            })
            return {...state, list: newList}
        }

        case COMPLETE_TODO: {
            const newList = state.list.slice()
            for (var i in newList) {
                if (newList[i].name === action.payload.name) {
                    newList[i].completed = true
                    break
                }
            }
            return {...state, list: newList}
        }

        default: {
            return state
        }
    }
}