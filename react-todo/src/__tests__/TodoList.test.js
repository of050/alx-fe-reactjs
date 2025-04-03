// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/Todo List/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const button = screen.getByText(/Add Todo/i);

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodo = screen.getByText(/New Todo/i);
    expect(newTodo).to