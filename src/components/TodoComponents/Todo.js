//  is a component that takes in the todo data and displays the task to the screen.
import React from 'react';

const Todo = props => {
    return (<div className={`item${props.data.completed ? 'task completed' : ''}`}
                 onClick={() => props.toggleItem(props.data.id)}>
            <p>{props.data.task}</p>
            {props.data.completed ? console.log('completed') : console.log(props.data.id)}

        </div>
    )
}

export default Todo;
