import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listTodos, completeTodo} from '../data/todo/actions'

class TodoList extends Component {

    componentWillMount() {
        this.props.listTodos()
    }

    handleTodoClick(todo) {
        this.props.completeTodo(todo)
    }

    renderTodos() {
        console.log(this.props.todos.list)
        return this.props.todos.list.map((todo) => {
            let boundTodoClick = this.handleTodoClick.bind(this, todo)
            return (
                <li key={todo.id} onClick={boundTodoClick}>
                    {todo.name} - Completado: {todo.completed === true ? 'SI' : 'NO'}
                </li>
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
        listTodos: listTodos,
        completeTodo: completeTodo
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
