import React from 'react'
import reactCSS from 'reactcss'

const Todo = ({title, completed}) => {
    const styles = reactCSS({
        'default': {
            todo: {
                width: '10%',
                cursor: 'pointer'
            }
        },
        'hover': {
            todo: {
                width: '10%',
                cursor: 'hand'
            }
        }
    })

    return (
        <div style={styles.todo}>
            <h3>{title}</h3>
            <p>Completed: {completed ? 'SI' : 'NO'}</p>
        </div>
    )
}

export default Todo
