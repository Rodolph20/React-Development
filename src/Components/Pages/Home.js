import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { TodoContext } from '../todoContext';
import '../../App.css';
const Home = () => {
  const { todos } = useContext(TodoContext);
  useEffect(() => {
    console.log('Todo list updated:', todos);
  }, [todos]);
  return (
    <div className="box-container">
      <h1 className="box-container h1">Todo List</h1>
      <ul className="box-container ul">
        {todos.map((todo, index) => (
          <li className="box-container li" key={index}>{todo}</li>
        ))}
      </ul> 
    </div>
  );
};

export default Home;