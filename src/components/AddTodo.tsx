import { useState, FormEvent, FC } from 'react';

import { AddTodoProps } from '../types';

const AddTodo: FC<AddTodoProps> = ({ onAddTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTodo;