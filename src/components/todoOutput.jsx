import React, { Component } from 'react';


class TodoOutput extends Component {

    render() { 
        return ( 
            <div className="col">
                {this.props.todoList.map(todo => {

                        return (
                            <div key={todo.title[0]} className="card ml-2 mb-2">
                                <div className="card-body">

                                    <button onClick={ () => this.props.onDelete(todo) } className="btn btn-danger btn-sm">X</button>
                                    <h5 className="card-title">{todo.title}</h5>
                                    <p className="card-text">{todo.body}</p>
                                    
                                </div>
                            </div>
                        )
                    } 
                )}

            </div>
        );
    }
}
 
export default TodoOutput;