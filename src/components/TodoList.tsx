import { TodoListProps } from '../types';
import {FC} from "react";

const TodoList: FC<TodoListProps> = (props) => {
    const { todos, onToggleTodo, onDeleteTodo } = props;

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={todo.completed ? 'completed' : ''}
                >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleTodo(todo.id)}
                    />
                    <span>{todo.text}</span>
                    <button onClick={() => onDeleteTodo(todo.id)}>
                        Удалить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;