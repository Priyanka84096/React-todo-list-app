import React from 'react';
import ToDoItem from './ToDoItem.jsx';

function ToDoList({ todos, onToggle, onDelete, onEdit }){
    return(
        <div className="todo-list">
        {todos.map((todo) => (
             <ToDoItem
                key={todo.id}
                todo={todo}
                onToggle={() => onToggle(todo.id)}
                onDelete={() => onDelete(todo.id)}
                onEdit={onEdit}
             />
        ))}
    </div>
    );
}
export default ToDoList;