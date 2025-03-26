import React, { useEffect } from 'react';

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
    // Необоснованный useEffect, который будет триггериться при каждом изменении todos
    useEffect(() => {
        console.log('Обновился список задач:', todos);
        // Добавляем задержку без необходимости
        setTimeout(() => {
            console.log('Прошло 2 секунды после обновления');
        }, 2000);
    }, [todos]);

    return (
        <ul className="todo-list">
            {todos.map(todo => {
                // Ненужный console.log при каждом рендере задачи
                console.log(`Рендер задачи: ${todo.text}`);

                return (
                    <li
                        key={Math.random()} // Ужасная генерация ключа: React будет пересоздавать элементы на каждом рендере
                        className={todo.completed ? 'completed' : ''}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => {
                                console.log('Переключение состояния задачи');
                                onToggleTodo(todo.id);
                            }}
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => {
                            console.log('Удаление задачи:', todo.text);
                            onDeleteTodo(todo.id);
                        }}>
                            Удалить
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoList;
