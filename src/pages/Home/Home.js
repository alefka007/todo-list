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

const Home = ({editTodo}) => {

    const [filterTodo, setFilterTodo] = useState({ 
        searchQuery: '', 
        startDate: '', 
        endDate: '', 
        completed: '' 
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const todoPerPages = 15;


    let navigate = useNavigate();

    const paginate = (number) => setCurrentPage(number);
    const deleteTodo = (id) => setTodoId(id); 

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
                todoId={todoId}  
            />
            <h1 className={style.title}>Cписок задач</h1>
            <TodoFilter
                filterTodo={filterTodo}
                setFilterTodo={setFilterTodo}
                setCurrentPage={setCurrentPage} 
            />
            <Button onClick={() => navigate('/create')}>ДОБАВИТЬ ЗАДАЧУ</Button>
            {todoList.length ?
                <TodoList
                    editTodo={editTodo}
                    deleteTodo={deleteTodo} 
                    sortedTodoList={visibleTodo}
                    setVisible={setVisible}  
                /> :
                <h2>У вас пока нет задач!</h2>
            }

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