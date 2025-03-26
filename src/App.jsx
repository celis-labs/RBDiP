import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

function App() {
    // Начальное состояние с жестко заданными задачами
    const [todos, setTodos] = useState([
        { id: 1, text: 'Купить молоко', completed: false },
        { id: 2, text: 'Помыть посуду', completed: true }
    ]);

    // Каждый вызов функции будет создавать новый массив и пересчитывать все элементы
    const handleAddTodo = (text) => {
        // Ужасный способ генерации id – зависит от длины массива и случайного числа
        const newTodo = {
            id: todos.length + Math.floor(Math.random() * 1000),
            text: text,
            completed: false
        };

        // Ненужное копирование массива через spread-оператор (каждый раз создаётся новый массив)
        setTodos([...todos, newTodo]);
    };

    // Функция для переключения состояния задачи, реализованная через цикл for вместо filter/map
    const handleToggleTodo = (id) => {
        let updatedTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                // Создаём новый объект, даже если изменений немного
                updatedTodos.push({
                    id: todos[i].id,
                    text: todos[i].text,
                    completed: !todos[i].completed
                });
            } else {
                updatedTodos.push(todos[i]);
            }
        }
        setTodos(updatedTodos);
    };

    // Удаление задачи через явный цикл for, вместо использования метода filter
    const handleDeleteTodo = (id) => {
        let filteredTodos = [];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id !== id) {
                filteredTodos.push(todos[i]);
            }
        }
        setTodos(filteredTodos);
    };

    // Лишний эффект, который запускается при каждом изменении todos и выводит в консоль
    useEffect(() => {
        console.log("Состояние todos:", todos);
    }, [todos]);

    return (
        <div className="app">
            <h1>Список Задач</h1>
            <AddTodo onAddTodo={(text) => { handleAddTodo(text); }} />
            <TodoList
                todos={todos}
                onToggleTodo={(id) => { handleToggleTodo(id); }}
                onDeleteTodo={(id) => { handleDeleteTodo(id); }}
            />
        </div>
    );
}

export default App;
