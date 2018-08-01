import React, { Component } from 'react';
import './styles/AppStyle.css';
import TodoOutput from './components/todoOutput';
import TodoInput from './components/todoInput';
import NewTodo from './components/newTodo';


class App extends Component {

  state = {
    // stores the list of todo objects
    todoList: []
  }

  // sets title and description of a todo list as a state
  handleSubmit = inp => {
    const newTodoList = [...this.state.todoList];
    newTodoList.push({title: inp.title, body: inp.body});

    this.setState({ todoList: newTodoList});
  }

  // delete todo from state
  handleDelete = todo => {
    const newTodoList = [...this.state.todoList];
    const index = newTodoList.indexOf(todo);
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1 className="display-4 ml-3">Smooth Todo list</h1>
        </div>

        <div className="row">

        </div>
        <div className="row"> 
          <TodoInput
            todoInpVal = { this.state.todoInpVal }
            onSubmit = { this.handleSubmit }
          />
          <TodoOutput 
            todoList = { this.state.todoList }
            onDelete = { this.handleDelete }
          />
          <div className="col"> </div>
        </div>
      </div>
    );
  }
}

export default App;
