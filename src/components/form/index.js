import React from 'react';
import './index.css';

const TodoForm = props => {


  const textInput = React.useRef(); // Consultar

  const entryText = {
    text: ''
  };

  const addTodo = () => {

    const item = {
      task: entryText.text,
      completed: false
    };

    props.handleNewTodo((prevState, props) => {
      return ([item, ...prevState])
    })

    // clear form imput
    textInput.current.value = '';
  };

  const handleEnter = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      addTodo();
    }
  };

  const handleChange = (e) => {
    entryText.text = e.target.value;
  };

  const handleClick = (e) => {
    addTodo();
  };

  return (
    <div className="header">

      <input
        id="myInput"
        type="text"
        placeholder="Add TODO task"
        ref={ textInput }
        onKeyPress={ handleEnter }
        onChange={ handleChange }
      />

      <Button handleClick={ handleClick }>
        Add Todo
      </Button>

    </div>
  );
};

const Button = ({ handleClick, children }) => (
  <button
    type="button"
    className="add-btn btn btn-outline-success btn-lg"
    onClick={ handleClick }>
    {children}
  </button>
);

export default TodoForm;
