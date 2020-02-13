<<<<<<< HEAD
import React from 'react'


class Todo extends React.Component {
    
    render() {
        
        /* {a component that takes in the todo data and displays the task to the screen.m.task} */
        return this.props.data.map( item => (
        <ul><li>{item.task}</li></ul>
            )
        )    

        
        
    }

    
}

export default Todo;
=======
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
>>>>>>> fbf500e50a7cbe0947f1b4c17fa6167e7129e7a8
