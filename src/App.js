import React from 'react';
import uuid from 'react-uuid';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
    owner = 'Dajuan'

    // will hold all the data needed for this project.
    constructor() {
        super();
        this.state = {
            data: [
                {
                    task: 'Work on Project',
                    id: uuid(),
                    completed: false
                },

                {
                    task: 'Take a Break',
                    id: uuid(),
                    completed: false
                },
                {
                    task: 'Have lunch with Son',
                    id: uuid(),
                    completed: false
                }
            ]
        };
    }

//clear completed todo item
    clearTasks = (e) => {

        e.preventDefault();

            this.setState({
                ...this.state,
                data: [...this.state.data.filter((task) => !task.completed)]
            })

    }
//toggle completed todo item
    toggleItem = selectedId => {
            data: this.state.data.map(task => {
                if (task.id === selectedId) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            })

    }
//add todo item
    addItem = (e, item) => {
        e.preventDefault();
        const newTodo = {
            task: item,
            id: uuid(),
            completed: false
        }
        this.setState({
            ...this.state,
            data: [...this.state.data, newTodo]
        })
        console.log('Added Item', this.state)

    }


    render() {
        return (
            <div className='App'>
                <h2>Welcome to {this.owner} Todo App!</h2>
                <div className='todo-container'>
                    <h3>Todo List</h3>
                    <TodoList
                        data={this.state.data}
                        toggleItem={this.toggleItem}
                        newTodo={this.addItem}
                    />
                </div>

                <div>
                    <h3>Todo Form</h3>
                    <TodoForm
                        addItem={this.addItem}
                        clearTasks={this.clearTasks}
                    />
                </div>
            </div>
        );
    }

}

export default App;
