import React, { useState } from 'react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import Button from '../../components/UI/button/Button';
import style from './Home.module.css';
import TodoList from '../../components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { useSortedTodo } from '../../hooks/useSortedTodo';
import { useNavigate } from 'react-router-dom';
import TodoPagination from '../../components/TodoPagination/TodoPagination';
import Modal from '../../components/UI/modal/Modal';

const Home = () => {

    const [filterTodo, setFilterTodo] = useState({ 
        searchQuery: '', 
        startDate: '', 
        endDate: '', 
        completed: '' 
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const todoPerPages = 15;


    let navigate = useNavigate();

    const paginate = (number) => setCurrentPage(number);
    const removeTodo = () => {}; 

    const todoList = useSelector(state => state.todo.todoList);
    const sortedTodo = useSortedTodo(todoList, filterTodo);

    const indexOfLastTodo = currentPage * todoPerPages;
    const indexOfFirstTodo = indexOfLastTodo - todoPerPages;
    const visibleTodo = sortedTodo.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
        <div className={style.container}>
            <Modal
                visible={visible}
                setVisible={setVisible}
                removeTodo={removeTodo}  
            />
            <h1 className={style.title}>Cписок задач</h1>
            <TodoFilter
                filterTodo={filterTodo}
                setFilterTodo={setFilterTodo}
                setCurrentPage={setCurrentPage} 
            />
            <Button onClick={() => navigate('/create')}>ДОБАВИТЬ ЗАДАЧУ</Button>
            <TodoList
                removeTodo={removeTodo} 
                sortedTodoList={visibleTodo}
                setVisible={setVisible}  
            />
            <TodoPagination 
                todoPerPages={todoPerPages} 
                totalTodo={todoList.length}
                paginate={paginate}
                currentPage={currentPage} 
            />
        </div>
    )
}

export default Home