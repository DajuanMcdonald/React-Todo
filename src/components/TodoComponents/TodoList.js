// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// Todo List
import React from 'react';
import Todo from './Todo';




class TodoList extends React.Component {
    // receives your Todos array and iterates over the list generating a new <Todo /> for each element 
    render() {

        return this.props.data.map( item => (
        <Todo data={item.task}/>
            
            )
        ) 
            
                
                
            
                
            
    }


}

export default TodoList;