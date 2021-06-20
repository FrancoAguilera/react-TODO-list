import './App.css';
import TodoForm from './components/form/'
import TodoItemList from './components/list/'

function App() {
  return (
    <div className="App col-md-8 offset-md-2">
      <TodoForm />
      <TodoItemList />
    </div>
  );
}

export default App;
