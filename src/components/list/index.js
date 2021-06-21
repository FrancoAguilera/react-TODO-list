import React from 'react';
import './index.css';

const TodoList = props => {

  const deleteTodo = (itemId) => {
    props.handleNewTodo((prevState) => {
      const newTodoList = [...prevState].filter(item => item.id !== itemId)
      return ([...newTodoList])
    });
  }

  const markCompleted = (itemId) => {
    props.handleNewTodo((prevState) => {
      const obj = [...prevState].find(item => item.id === itemId);
      if (obj) {
        obj.completed = !obj.completed
      }
      return [...prevState];
    });
  }

  const Button = ({ handleClick, classList, children }) => (
    <button
      type="button"
      className={ classList }
      onClick={ handleClick }>
      {children}
    </button>
  );

  const ListItems = () => props.todos.map((item, i) => {
    return (
      <li key={ item.id } id={ item.id } className={ item.completed ? 'checked' : '' }>

        { item.task }

        <div className="list-item-buttons">
          <Button classList='btn btn-success' handleClick={ () => markCompleted(item.id) }>Mark complete</Button>
          <Button classList='btn btn-danger' handleClick={ () => deleteTodo(item.id) }>Delete todo</Button>
        </div>
      </li>
    )
  });

  return (
    <ul>
      <ListItems />
    </ul>
  )
};

export default TodoList;