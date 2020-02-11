import React from 'react';

const TodoForm = props => {
    return (
        <>
        <input type='text' placeholder='User Input'></input>
        <input type='submit' value='Add Todo'></input>
        <input type='button' value='Clear Completed'></input>
        </>
    )
}

export default TodoForm;