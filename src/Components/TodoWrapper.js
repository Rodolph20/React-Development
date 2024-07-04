import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import './TodoWrapper.css'; // Import CSS for TodoWrapper

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = Todo => {
    setTodos([...todos, { id: uuidv4(), task: Todo, completed: false, isEditing: false }]);
    console.log(todos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo task={todo} key={index} />
        ))}
      </ul>
    </div>
  );
};
