import React, {Component} from 'react'

import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Footer from '../components/Footer'

class Root extends Component {

    render() {
        return (
            <div className="App">
                <AddTodo />
                <br />
                <TodoList />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Root
