import React from 'react'
// Todo Item

class Todo extends React.Component {
    
    render() {
        
        
        return this.props.data.map( item => (
            <ul>
                <li>
                {item.task}
                </li>
            </ul>

            
        ) 
            

        );
       

        
        
    }

    
}

export default Todo;