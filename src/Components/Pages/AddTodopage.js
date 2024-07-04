import React, { useContext, useRef } from 'react';
import { TodoContext } from '../todoContext';
import '../Add.css';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current?.value.trim(); 
    if (newTodo) { 
      addTodo(newTodo);
      inputRef.current.value = ''; 
    }
  };

  return (
    <div className="add-container">
      <div className="add-box">
        <p className='paragraph'> Add A todo to the List</p>
        <form className="add-form" onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Add new todo"
            className="add-input"
          />
          <button type="submit" className="add-button">Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
