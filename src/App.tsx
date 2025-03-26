import { FC } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useTodos } from './hooks/useTodos';

const App: FC = () => {
    const {
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        deleteTodo,
        filterTodos
    } = useTodos();

    return (
        <div className="app">
            <h1>Список задач</h1>
            <AddTodo onAddTodo={addTodo} />
            <div className="filter-buttons">
                {(['all', 'active', 'completed'] as const).map(status => (
                    <button
                        key={status}
                        onClick={() => setFilter(status)}
                        className={filter === status ? 'active' : ''}
                    >
                        {status}
                    </button>
                ))}
            </div>
            <TodoList
                todos={filterTodos}
                onToggleTodo={toggleTodo}
                onDeleteTodo={deleteTodo}
            />
        </div>
    );
};

export default App;