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
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
