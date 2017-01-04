import React, {Component} from 'react'

import TodoList from '../containers/TodoList'
import Footer from '../components/Footer'

class Root extends Component {

    render() {
        return (
            <div className="App">
                <TodoList />
                <br />
                <Footer />
            </div>
        )
    }

}

export default Root
