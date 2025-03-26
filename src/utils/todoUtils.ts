import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoStatus } from '../types';

export function generateTodoId(): string {
    return uuidv4();
}

export function filterTodos(todos: Todo[], status: TodoStatus): Todo[] {
    switch (status) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

export function validateTodoText(text: string): boolean {
    return text.trim().length > 0 && text.trim().length <= 200;
}