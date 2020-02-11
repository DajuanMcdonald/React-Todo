import React from 'react'

class Todo extends React.Component {
    render() {
        return this.props.data.map( item => (
            <p>
                {item.task}
            </p>
        )

        );
    }
}

export default Todo;