import React from 'react';
import uuid from 'react-uuid';
import TodoForm from './components/TodoComponents/TodoForm';
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
}

export default App;
