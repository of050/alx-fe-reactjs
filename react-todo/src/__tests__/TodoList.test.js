// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList'; // Adjust the import path as necessary

describe('TodoList Component', () => {
  // Initial Render Test
  test('renders TodoList component with initial todos', () => {
    const initialTodos = [
      { id: 1, text: 'Learn React', completed: false },
      { id: 2, text: 'Learn Testing', completed: false },
    ];
    
    render(<TodoList initialTodos={initialTodos} />);
    
    // Check if todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
  });

  // Test Adding Todos
  test('adds a new todo', () => {
    render(<TodoList initialTodos={[]} />);
    
    const input = screen.getByPlaceholderText('Add a new todo'); // Adjust placeholder as necessary
    const button = screen.getByText('Add'); // Adjust button text as necessary

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test Toggling Todos
  test('toggles a todo item', () => {
    const initialTodos = [{ id: 1, text: 'Learn React', completed: false }];
    
    render(<TodoList initialTodos={initialTodos} />);
    
    const todoItem = screen.getByText('Learn React');
    const checkbox = screen.getByRole('checkbox'); // Assuming you have a checkbox for toggling

    fireEvent.click(checkbox);
    expect(todoItem).toHaveClass('completed'); // Adjust class name as necessary

    fireEvent.click(checkbox);
    expect(todoItem).not.toHaveClass('completed');
  });

  // Test Deleting Todos
  test('deletes a todo item', () => {
    const initialTodos = [{ id: 1, text: 'Learn React', completed: false }];
    
    render(<TodoList initialTodos={initialTodos} />);
    
    const deleteButton = screen.getByText('Delete'); // Adjust button text as necessary
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});