import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
    render(<TodoList />);
    const headingElement = screen.getByText(/Todo List/i);
    expect(headingElement).toBeInTheDocument();
});

test('adds a new todo', () => {
    render(<TodoList />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /Add Todo/i });

    fireEvent.change(inputElement, { target: { value: 'Learn React' } });
    fireEvent.click(buttonElement);

    const todoItem = screen.getByText(/Learn React/i);
    expect(todoItem).toBeInTheDocument();
});

test('does not add an empty todo', () => {
    render(<TodoList />);
    const buttonElement = screen.getByRole('button', { name: /Add Todo/i });

    fireEvent.click(buttonElement);

    const todoItems = screen.queryAllByRole('listitem');
    expect(todoItems.length).toBe(0);
});