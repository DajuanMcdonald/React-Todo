import React from 'react'


class Todo extends React.Component {
    
    render() {
        
        /* {a component that takes in the todo data and displays the task to the screen.m.task} */
        return this.props.data.map( item => (
        <ul><li>{item.task}</li></ul>
            )
        )    

        
        
    }

    
}

export default Todo;