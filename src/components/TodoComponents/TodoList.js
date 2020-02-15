import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.data.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}

            <button className="clear-btn" onClick={props.clearList}>Clear List</button>

        </div>

    )
}

export default TodoList;