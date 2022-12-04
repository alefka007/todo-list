import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.css';

const TodoList = () => {
    const todoListArr = useSelector(state => state.todo.todoList);
    if(!todoListArr || !todoListArr.length) return

    return (
        <div className={style.container}>
            { todoListArr.map((todo) => <TodoItem key={todo.id} todo={todo} />) }
        </div>
    )
}

export default TodoList