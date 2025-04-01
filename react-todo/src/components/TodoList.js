// src/components/TodoList.js
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Write Tests', completed: false }
];

const TodoList = () => {
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <AddTodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        onClick={() => toggleTodo(todo.id)} 
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;