import './App.css';
import TodoForm from './components/todo-form/'
import TodoItemList from './components/todo-item/'

function App() {
  return (
    <div className="App col-md-8 offset-md-2">
      <TodoForm />
      <TodoItemList />
    </div>
  );
}

export default App;
