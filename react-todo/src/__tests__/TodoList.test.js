// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test for initial render
  test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  // Test for initial state
  test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3); // Assuming there are 3 initial todos
  });

  // Test for adding a new todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodo = screen.getByText(/New Todo/i);
    expect(newTodo).toBeInTheDocument();
  });

  // Test for toggling a todo
  test('toggles a todo between completed and not completed', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i); // Assuming this is one of the initial todos

    // Click to toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  // Test for deleting a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i); // Assuming this is one of the initial todos
    const deleteButton = todoItem.nextSibling; // Get the delete button next to the todo item

    fireEvent.click(deleteButton); // Click the delete button

    expect(todoItem).not.toBeInTheDocument(); // Ensure the todo item is removed
  });
});