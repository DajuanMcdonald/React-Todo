import React from 'react';
// this is where we Add the todo Item to the ToDo List
// Todo Form

class TodoForm extends React.Component {
    /*will hold your input field and your Add Todo and Clear Completed buttons. */
    render() {
        return (
            <>
                <form className='container-form'>
                    <input name='input' type='text' placeholder='User Input'></input>
                    <input name='add' type='submit' value='Add Todo'></input>
                    <input name='clear' type='button' value='Clear Completed'></input>
                </form>
            </>
        )
    }
}

export default TodoForm;