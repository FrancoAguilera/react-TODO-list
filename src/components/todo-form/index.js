import React from 'react';
import './index.css';

class TodoForm extends React.Component {
  render() {
    return (
      <div class="header">
        <input type="text" id="myInput" placeholder="Add a new task" />
        <div class="action-buttons">
        <button type="button" class="btn btn-outline-success btn-lg">Add Todo</button>
        <button type="button" class="btn btn-outline-danger btn-lg">Remove Todo</button>        
        </div>
      </div>
    );
  }
}

export default TodoForm;