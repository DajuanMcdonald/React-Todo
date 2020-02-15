<<<<<<< HEAD
import React from 'react';
// this is where we Add the todo Item to the ToDo List
// Todo Form

class TodoForm extends React.Component {
    /*will hold your input field and your Add Todo and Clear Completed buttons. */
=======
// will hold your input field and your Add Todo and Clear Completed buttons
import React, {Component} from 'react';
import uuid from 'react-uuid';

class TodoForm extends Component {
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
    constructor() {
        super();
        this.state = {
            task: '',
<<<<<<< HEAD
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
=======
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
>>>>>>> 85b884fa788731b010c574942438cae94bf29d79
