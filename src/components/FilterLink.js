import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class FilterLink extends Component {
    static propTypes = {
        filter: PropTypes.string.isRequired
    };

    render() {
        const {
            filter,
            children
        } = this.props

        return (
            <Link
                to={filter === 'all' ? 'all' : filter}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black'
                }}>
                {children}
            </Link>
        )
    }
}
