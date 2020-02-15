import React from 'react';
import uuid from 'react-uuid';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList'




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

  addTodo = (event, item) => {
    event.preventDefault();

    const newTodo = {
      task: item,
      id: uuid(),
      completed: false
    };

    this.setState({
      data: [...this.state.data, newTodo]
    })
  }

  toggleTodo = itemId => {
    console.log(itemId);

    this.setState({
      data: this.state.data.map(todo => {
        if (itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }

        return todo;
      })
    })
  }

  clearList = e => { 
    e.preventDefault();
    this.setState({
      data: this.state.data.filter(todo => todo.completed === false)
    })
  }

  
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const name = 'Dajuan'
    // const props = this.state.data;
    // console.log(props)
    return (
      < div className="App">
      <h2>Welcome to {name}'s' Todo App!</h2>

        <h2>Todo List</h2>
      <div>
        <TodoList
        data={this.state.data}
        toggleTodo={this.toggleTodo}
        clearList={this.clearList}
        />

      </div>
          <TodoForm addTodo={this.addTodo}

          />
      </div> 
    );
  }

  

  
}

export default App;
