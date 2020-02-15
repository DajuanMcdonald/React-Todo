<<<<<<< HEAD
=======
// receives your Todos array and iterates over the list generating a new <Todo /> for each element
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
<<<<<<< HEAD
        <div className="todo-list">
            {props.data.map(todo => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
            ))}

            <button className="clear-btn" onClick={props.clearList}>Clear List</button>

        </div>

    )
}

export default TodoList;
=======
        <>
            <div className="todo-item">
                {props.data.map(item => (
                    <Todo
                        key={item.id}
                        data={item}
                        toggleItem={props.toggleItem}
                    />


                ))}



            </div>
        </>
    )
}

export default TodoList;
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
