<<<<<<< HEAD
import React from 'react';
// this is where we Add the todo Item to the ToDo List
// Todo Form

class TodoForm extends React.Component {
    /*will hold your input field and your Add Todo and Clear Completed buttons. */
    render() {
       
       

        return (
            
                <form className='container-form'>
                    <input name='input' type='text' placeholder='User Input'></input>
                    <input name='add' type='submit' value='Add Todo'></input>
                    <input name='clear' type='button' value='Clear Completed'></input>
                </form>
            
        )
    }
}

export default TodoForm;
=======
// will hold your input field and your Add Todo and Clear Completed buttons
import React, {Component} from 'react';
import uuid from 'react-uuid';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            id: uuid(),
            completed: false
        }
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.task) {
            this.props.addItem(e, this.state.task)
            this.setState({
                ...this.state,
                task: '',

        })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="task" type="text" placeholder="add todo"/>


                <button onClick={this.addItem}>Add</button>
                <button onClick={this.clearTasks}>Clear</button>
            </form>
        );
    }
}

export default TodoForm;
>>>>>>> fbf500e50a7cbe0947f1b4c17fa6167e7129e7a8
