// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// Todo List
import React from 'react';




class TodoList extends React.Component {
    // receives your Todos array and iterates over the list generating a new <Todo /> for each element 
    render() {
    return (
        <>
        
        <div>Hello from TodList Component</div>
       
        </>
    )
    }

    // TodoList.propTypes = {
    //     data: PropTypes.array.isRequired
    // }
}

export default TodoList;