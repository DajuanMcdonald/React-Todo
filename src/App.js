import React from 'react';
import uuid from 'react-uuid';
import TodoForm from './components/TodoComponents/TodoForm';
<<<<<<< HEAD
// import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo';



class App extends React.Component {
  constructor() {
    super();
    this.state ={
      data: [{
        task: 'Work on Projects',
        id: Date.now(),
        completed: false
      },

      {
        task: 'Take a Break',
        id: uuid(),
        completed: false
      },

      {
        task: 'Eat Lunch with Son',
        id: uuid(),
        completed: false
      }
    
    ]

    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const name = 'Dajuan'
    const props = this.state.data;
    console.log(props)
    return (
      <>
      
      <Todo key={props.id} data={props} />

      
     
      <div>
        <h2>Welcome to {name}'s' Todo App!</h2>
      </div>
      <TodoForm onChange={(e) => this.updateList(e)} name='form'/>
      </> 
    );
  }

  updateList = (e) => {
    this.setState({ data: e.target.value});
    console.log('updateList')
  }
  

  componentDidMount = () => {
    const data = localStorage.getItem('data')
    const persistantData = JSON.stringify('data')
    // this is async
    this.setState({todos: persistantData});
    data ? console.log(data) : console.log('no data')
  }
=======
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

>>>>>>> fbf500e50a7cbe0947f1b4c17fa6167e7129e7a8
}

export default App;
