import React, { useState } from 'react';

import './App.css';

import TodoForm from './components/form/'
import TodoItemList from './components/list/'


const App = () => {

  const [todos, setTodos] = useState([
    {
      id: '1624237244981',
      task: 'Do laundry',
      completed: false
    },
    {
      id: '1624237244126',
      task: 'Go to the gtm',
      completed: false
    },
    {
      id: '1624237246410',
      task: 'Buy groseries',
      completed: false
    }
  ])

  return (
    <div className="App col-md-8 offset-md-2">
      <TodoForm handleNewTodo={ setTodos } />
      <TodoItemList todos={ todos } handleNewTodo={ setTodos }/>
    </div>
  );
}

export default App;
