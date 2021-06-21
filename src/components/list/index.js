import React from 'react';
import './index.css';

const TodoList = props => {
  const ListItems = () => props.todos.map((item, i) => {
    return (
      <li key={ i } className={ item.completed ? 'checked' : '' }>{ item.task }</li>
    )
  });

  return (
    <ul>
      <ListItems />
    </ul>
  )
};

export default TodoList;