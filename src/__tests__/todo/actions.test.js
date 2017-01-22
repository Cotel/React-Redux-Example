jest.mock('../../api')

import thunk from 'redux-thunk'
import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import * as actions from '../../data/todo/actions'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe('todo actions', () => {

    it('addTodo should return new todo', () => {
        const expectedResponse = {
            id: 121,
            text: 'Test todo',
            completed: false
        }
        const store = mockStore({})

        return store.dispatch(actions.addTodo('Test todo'))
            .then(() => {
                expect(store.getActions()[0].payload).toEqual(expectedResponse)
            })
    })


})
