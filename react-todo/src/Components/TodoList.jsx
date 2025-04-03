// src/components/TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  // Static array of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn Jest', completed: false },
    { id: 3, text: 'Build a Todo App', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return; // Prevent adding empty todos
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo(''); // Clear input field
  };

  // Function to toggle todo completion status
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Add a new todo" 
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id} 
            onClick={() => toggleTodo(todo.id)} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;