import React, { useState } from 'react';
const Add = ({ setTodos, todos }) => { 
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, newTodo]); 
    setNewTodo(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit" >Add Todo</button>
    </form>
  );
};

export default Add;