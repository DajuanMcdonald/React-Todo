import React from 'react';
// this is where we Add the todo Item to the ToDo List
// Todo Form

class TodoForm extends React.Component {
    /*will hold your input field and your Add Todo and Clear Completed buttons. */
    constructor() {
        super();
        this.state = {
            task: '',
        };
    }
    updateList = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitTodo = e => { e.preventDefault(); this.props.addTodo(e, this.state.task)}

    render() {
       
       

        return (
            
                <form className='container-form' onSubmit={this.submitTodo}>
                    <input  name='input' type='text' placeholder='User Input'></input>
                    <button onChange={this.updateList} name='add' type='submit'>Add</button>
                    <input type="button" value='Clear Completed'></input>
                </form>
            
        )
    }
}

export default TodoForm;