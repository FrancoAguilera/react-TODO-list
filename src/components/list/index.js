import React from 'react';
import './index.css';

class TodoItemList extends React.Component {
  render() {
    return (
      <ul>
        <li className="checked">Pay bills</li>
      </ul> 
    );
  }
}

export default TodoItemList;