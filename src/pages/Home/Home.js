import React, { useState } from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import Button from '../../components/UI/button/Button';
import style from './Home.module.css';
import TodoList from '../../components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { useTodo } from '../../hooks/useTodo';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [filterTodo, setFilterTodo] = useState({ sort: '', query: '' });
    let navigate = useNavigate();

    const todoListArr = useSelector(state => state.todo.todoList);
    const sortedTodo = useTodo(todoListArr, filterTodo.sort, filterTodo.query);

    return (
        <div className={style.container}>
            <h1 className={style.title}>Cписок задач</h1>
            <TodoFilter
                filterTodo={filterTodo}
                setFilterTodo={setFilterTodo} 
                />
            <Button onClick={() => navigate('/form')}>ДОБАВИТЬ ЗАДАЧУ</Button>
            <TodoList sortedTodoList={sortedTodo}  />
        </div>
    )
}

export default Home