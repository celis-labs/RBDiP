export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
}

export type TodoStatus = 'all' | 'active' | 'completed';

export interface TodoListProps {
    todos: Todo[];
    onToggleTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}

export interface AddTodoProps {
    onAddTodo: (text: string) => void;
}