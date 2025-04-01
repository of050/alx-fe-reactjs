// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders correctly with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Write Tests')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const button = screen.getByRole('button', { name: /add/i });

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('toggles todo status', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);

        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText('Delete')[0];
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});