import { useState } from 'react'
import Header from './components/Header.jsx';
import ToDoList from './components/ToDoList.jsx';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a to-do app', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');
  function handleAddTodo(){
    if(newTodoText.trim() !== ''){
        const newTodo = {
            id: Date.now(),
            text: newTodoText,
            completed: false
        }
        setTodos([...todos, newTodo]);
        setNewTodoText("");
    }
  }
    function handleToggleTodo(id){
        setTodos(
          todos.map((todo)=>
           todo.id === id ? {...todo, completed: !todo.completed} : todo
        ));
    }
    function handleDeleteTodo(id){
        setTodos(todos.filter((todo) => todo.id !==id));
    }
    function handleEditTodo(id, newText){
       setTodos(
         todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo)
       );
    }
    function handleNewTodoChange(e){
      setNewTodoText(e.target.value);
    }
  return (
        <>
            <Header/>
            <div className="container">
              <div className="add-todo">
                  <input type="text" placeholder="Add a new task"
                      value={newTodoText}
                      onChange={handleNewTodoChange}
                  />
                   <button onClick={handleAddTodo}>Add</button>
              </div>
                <ToDoList
                    todos={todos}
                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}
                    onEdit={handleEditTodo}
                />
            </div>
        </>
  );
}

export default App;
