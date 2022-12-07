import React from 'react'
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.css';

const TodoList = ({ sortedTodoList, setVisible, removeTodo}) => {
    if (!sortedTodoList  || !sortedTodoList.length) return

    return (
        <div className={style.container}>
            { sortedTodoList.map((todo) => (
                <TodoItem
                    removeTodo={removeTodo}
                    setVisible={setVisible}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList