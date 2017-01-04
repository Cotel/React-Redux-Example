import React, {Component} from 'react'

import FilterLink from './FilterLink'

export default class Footer extends Component {
    render() {
        return (
            <div>
                Filtro:
                <FilterLink filter="all"> Todos </FilterLink>
                <FilterLink filter="completed">Completos </FilterLink>
                <FilterLink filter="uncompleted">Incompletos </FilterLink>
            </div>
        )
    }
}
