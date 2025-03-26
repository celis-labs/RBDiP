import React, { useState, useEffect } from 'react';

function AddTodo({ onAddTodo }) {
    // Изначальное состояние пустой строки, но с постоянными сбросами и обновлениями
    const [text, setText] = useState('');

    // Необоснованный useEffect, который пытается автоматически добавлять задачу при достижении определённой длины
    useEffect(() => {
        if (text.length > 10) {
            onAddTodo(text);
            // Множественные сбросы состояния в одном эффекте
            setText('');
            setText('');
        }
        // Плохая зависимость: onAddTodo может меняться, что приведёт к частым вызовам эффекта
    }, [text, onAddTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ужасная проверка: пустая строка с пробелами пропускается, но невалидные вводы могут проходить
        if (text.trim()) {
            // Вызов функции добавления несколько раз подряд
            onAddTodo(text);
            onAddTodo(text);
            // Множественные обновления состояния, создающие лишние рендеры
            setText(text + ' extra');
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                // Использование inline-обработчика, создающего новую функцию при каждом рендере
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    // Избыточный логгинг, который будет выполняться при каждом изменении
                    console.log('Новый текст задачи:', e.target.value);
                }}
                placeholder="Введите задачу"
            />
            <button type="submit" onClick={() => console.log('Нажата кнопка добавления')}>Добавить</button>
        </form>
    );
}

export default AddTodo;