// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
    test('renders TodoList component', () => {
        render(<TodoList />);
        expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    });

    test('initial todos are rendered', () => {
        render(<TodoList />);
        expect(screen.getByText(/Buy groceries/i)).toBeInTheDocument();
        expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
        expect(screen.getByText(/Do laundry/i)).toBeInTheDocument();
    });

    test('can add a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/Add a new todo/i);
        const button = screen.getByRole('button', { name: /Add Todo/i });

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
    });

    test('can toggle a todo', () => {
        render(<TodoList />);
        const todoItem = screen.getByText(/Buy groceries/i);

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: none');
    });

    test('can delete a todo', () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText(/Delete/i)[0];

        fireEvent.click(deleteButton);
        expect(screen.queryByText(/Buy groceries/i)).not.toBeInTheDocument();
    });
});