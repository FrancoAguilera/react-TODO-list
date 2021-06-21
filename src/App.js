import React, { useState } from 'react';

import './App.css';

import TodoForm from './components/form/'
import TodoItemList from './components/list/'


const App = () => {

  const [todos, setTodos] = useState([
    {
      task: 'Do laundry',
      completed: true
    },
    {
      task: 'Go to the gtm',
      completed: false
    },
    {
      task: 'Buy groseries',
      completed: true
    }
  ])

  return (
    <div className="App col-md-8 offset-md-2">
      <TodoForm handleNewTodo={ setTodos } />
      <TodoItemList todos={ todos } />
    </div>
  );
}

export default App;
