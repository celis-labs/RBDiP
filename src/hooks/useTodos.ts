import { useState, useCallback } from 'react';
import { Todo, TodoStatus } from '../types';
import { generateTodoId, validateTodoText } from '../utils/todoUtils';

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<TodoStatus>('all');

    const addTodo = useCallback((text: string) => {
        if (!validateTodoText(text)) {
            alert('Некорректный текст задачи');
            return;
        }

        const newTodo: Todo = {
            id: generateTodoId(),
            text,
            completed: false,
            createdAt: new Date()
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    }, []);

    const toggleTodo = useCallback((id: string) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    const deleteTodo = useCallback((id: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }, []);

    const filterTodos = useCallback(() => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }, [todos, filter]);

    return {
        todos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        filterTodos: filterTodos()
    };
};