import React from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import Button from '../../components/UI/button/Button';
import style from './Home.module.css';
import TodoList from '../../components/TodoList/TodoList';

const Home = ({ setIsHome }) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>Cписок задач</h1>
            <TodoFilter />
            <Button onClick={() => setIsHome(false)}>ДОБАВИТЬ ЗАДАЧУ</Button>
            <TodoList />
        </div>
    )
}

export default Home