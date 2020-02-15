<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

const Todo = props => {
    console.log(props)
    return (
        <div
        className={`todo${props.todo.completed ? "completed" : ""}`}
        onClick={() => props.toggleTodo(props.todo.id)}
        >

            <p>{props.todo.task}</p>
=======
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
>>>>>>> bb64e70f7a728b63b34d9e72c4e724a4c9e06579
=======
//  is a component that takes in the todo data and displays the task to the screen.
import React from 'react';

const Todo = props => {
    return (<div className={`item${props.data.completed ? 'task completed' : ''}`}
                 onClick={() => props.toggleItem(props.data.id)}>
            <p>{props.data.task}</p>
            {props.data.completed ? console.log('completed') : console.log(props.data.id)}
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79

        </div>
    )
}
<<<<<<< HEAD
export default Todo;
=======

export default Todo;
<<<<<<< HEAD
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
=======
>>>>>>> fbf500e50a7cbe0947f1b4c17fa6167e7129e7a8
>>>>>>> bb64e70f7a728b63b34d9e72c4e724a4c9e06579
