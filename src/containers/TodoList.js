import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listTodos} from '../data/todo/actions'

class TodoList extends Component {

    componentDidMount() {
        this.props.listTodos()
        console.log(this.props.todos.list)
    }

    renderTodos() {
        return this.props.todos.list.map((todo) => {
            return (
                <li key={todo.name}>{todo.name} - Completado: {todo.completed === true ? 'SI' : 'NO'}</li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderTodos()}
            </ul>
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
        listTodos: listTodos
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
