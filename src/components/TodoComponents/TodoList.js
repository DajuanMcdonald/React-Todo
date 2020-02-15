<<<<<<< HEAD
<<<<<<< HEAD
=======
// receives your Todos array and iterates over the list generating a new <Todo /> for each element
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
=======
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// Todo List
>>>>>>> bb64e70f7a728b63b34d9e72c4e724a4c9e06579
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
<<<<<<< HEAD
=======
// receives your Todos array and iterates over the list generating a new <Todo /> for each element
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
>>>>>>> bb64e70f7a728b63b34d9e72c4e724a4c9e06579
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
<<<<<<< HEAD
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
=======
>>>>>>> fbf500e50a7cbe0947f1b4c17fa6167e7129e7a8
>>>>>>> bb64e70f7a728b63b34d9e72c4e724a4c9e06579
