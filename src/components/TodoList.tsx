import React from 'react';
import { Todo } from '../models/Todo';
import '../styles/TodoList.css';

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.todos.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>

                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
                        DELETE
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
