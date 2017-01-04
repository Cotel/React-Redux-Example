import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {addTodo} from '../data/todo/actions'

class AddTodo extends Component {

    handleSubmit(input) {
        this.props.addTodo(input.value)
        input.value = ''
    }

    render() {
        let input
        return (
            <div>
                <input ref={(node) => {input = node}}
                        type="text"
                        placeholder="todo" />
                <button onClick={() => this.handleSubmit(input)}>Add Todo</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo: addTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
