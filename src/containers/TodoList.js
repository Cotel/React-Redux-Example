import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {listTodos, completeTodo} from '../data/todo/actions'
import Todo from '../components/Todo'

class TodoList extends Component {

    componentWillMount() {
        this.props.listTodos()
    }

    handleTodoClick(todo) {
        this.props.completeTodo(todo)
    }

    renderTodos() {
        let todosList = this.props.todos.list
        if (this.props.todos.filter === 'completed') {
            todosList = todosList.filter((todo) => todo.completed === true)
        } else if (this.props.todos.filter === 'uncompleted') {
            todosList = todosList.filter((todo) => todo.completed === false)
        }
        return todosList.map((todo) => {
            let boundTodoClick = this.handleTodoClick.bind(this, todo)
            return (
                <li key={todo.id} onClick={boundTodoClick}>
                    <Todo title={todo.name} completed={todo.completed} />
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.todos.isLoading ? 'Cargando...' : ''}</p>
                <ul>
                    {this.renderTodos()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state, {params}) {
    const todosReducer = state.todos
    return {
        todos: {...todosReducer, filter: params.filter || 'all'}
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listTodos: listTodos,
        completeTodo: completeTodo
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))
