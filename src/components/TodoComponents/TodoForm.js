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
