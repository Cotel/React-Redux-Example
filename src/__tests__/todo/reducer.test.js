const expect = require('expect')
const deepFreeze = require('deep-freeze')
import {List} from 'immutable'

import todo from '../../data/todo/reducer'

describe('todo should', () => {

    it('add new todo', () => {
        const testTodo = {
            id: 0,
            text: 'Test 1',
            completed: false
        }
        const stateBefore = {list: List([])}
        const stateAfter = {list: List([testTodo])}

        deepFreeze(stateBefore)

        expect(todo(stateBefore, {type: 'ADD_TODO', payload: testTodo})).toEqual(stateAfter)
    })

    it('toggle todo', () => {
        const testTodo = {id: 0, text: 'Test 1', completed: false}
        const stateBefore = {list: List([testTodo])}
        const stateAfter = {list: List([{...testTodo, completed: true}])}

        deepFreeze(stateBefore)

        const resState = todo(stateBefore, {type: 'COMPLETE_TODO', payload: 0})

        expect(resState).toEqual(stateAfter)
    })
})
