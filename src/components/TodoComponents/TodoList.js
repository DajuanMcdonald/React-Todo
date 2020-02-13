// receives your Todos array and iterates over the list generating a new <Todo /> for each element
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
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
