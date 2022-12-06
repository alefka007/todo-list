import React, { useState } from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import Button from '../../components/UI/button/Button';
import style from './Home.module.css';
import TodoList from '../../components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { useSortTodo } from '../../hooks/useSortTodo';
import { useNavigate } from 'react-router-dom';
import TodoPagination from '../../components/TodoPagination/TodoPagination';
import { createNumberPagination, getPageCount } from '../../utils/pages';

const Home = () => {

    const [filterTodo, setFilterTodo] = useState({ 
        searchQuery: '', 
        startDate: '', 
        endDate: '', 
        completed: '' 
    });

    const [pageCount, setPageCount] = useState(0);

    const todoLimit = 15;

    let navigate = useNavigate();

    const todoList = useSelector(state => state.todo.todoList);
    const sortedTodo = useSortTodo(todoList, filterTodo);
    
    const numberArr = createNumberPagination(getPageCount(todoList.length, todoLimit));

    return (
        <div className={style.container}>
            <h1 className={style.title}>Cписок задач</h1>
            <TodoFilter
                filterTodo={filterTodo}
                setFilterTodo={setFilterTodo} 
                />
            <Button onClick={() => navigate('/create')}>ДОБАВИТЬ ЗАДАЧУ</Button>
            <TodoList sortedTodoList={sortedTodo}  />
            <TodoPagination numberArr={numberArr}  />
        </div>
    )
}

export default Home