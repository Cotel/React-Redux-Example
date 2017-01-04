import {combineReducers} from 'redux'
import todosReducer from './data/todo/reducer'

const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer
