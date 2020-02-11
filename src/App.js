import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'
import Todo from './components/TodoComponents/Todo';
// import Todo from './components/TodoComponents/Todo'

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
        id: Date.now(),
        completed: false
      },

      {
        task: 'Eat Lunch with Son',
        id: Date.now(),
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
    console.log(this.state.data)
    return (
      <>
      <Todo key={this.state.id} data={this.state.data}/>
      <TodoList />
     
      <div>
        <h2>Welcome to {name}'s' Todo App!</h2>
      </div>
      <TodoForm onChange={(e) => this.updateList(e)} name='form'/>
      </> 
    );
  }

  updateList = (e) => {
    this.setState({ data: e.target.value})
  }

//   taskComplete = task => {
//     const todoItem = [...this.state.data];
//     todoItem.filter(task => 
//         task.task === task
//     ).map(task => (task.completed = !task.completed))
//     this.setState(todoItem);
    
// }

  

  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    // const persistantData = JSON.parse('todos')
    // this is async
    // this.setState({ todos: persistantData});
    todos ? console.log(todos) : console.log('no todos')
  }
}

export default App;
