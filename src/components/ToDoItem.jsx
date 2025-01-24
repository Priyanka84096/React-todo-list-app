import React, { useState } from 'react';
function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.text);
    function handleEditClick() {
        setIsEditing(true)
    }
    function handleCancelClick(){
      setIsEditing(false)       //editing-false & edit value me previous/initial value store kr dega
      setEditValue(todo.text)
    }
    function handleSaveClick(){
      onEdit(todo.id, editValue);
      setIsEditing(false)
    }
    function handleEditValue(e){
      setEditValue(e.target.value);
    }

  return (
    <div className="todo-item">
        { isEditing ?
            (
                <>
                     <input type="text" value={editValue} onChange={handleEditValue}/>
                     <button className="edit-button" onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                 </>
            ): (
            <>
               <span className={todo.completed ? 'completed' : ''}>
                    {todo.text}
               </span>
               <input type="checkbox" checked={todo.completed} onChange={onToggle}/>
               <button className="edit-button" onClick={handleEditClick}>Edit</button>
               <button onClick={onDelete}>Delete</button>
            </>
           )
        }
    </div>
  );
}
export default ToDoItem;