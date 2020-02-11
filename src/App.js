import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      data: [{
        title: '',
        id: Date.now(),
        completed: false
      }]

    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const name = 'Dajuan'
    return (
      <>
      <div>
        <h2>Welcome to {name}'s' Todo App!</h2>
      </div>
      <TodoForm onChange={(e) => this.updateList(e)} name='form'/>
      <TodoList/>
      </> 
    );
  }

  updateList = (e) => {
    this.setState({ data: e.target.value})
  }

  

  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    // const persistantData = JSON.parse('todos')
    // this is async
    // this.setState({ todos: persistantData});
    todos ? console.log(todos) : console.log('no todos')
  }
}

export default App;
