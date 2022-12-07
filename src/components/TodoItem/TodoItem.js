import React from 'react';
import Input from '../UI/input/Input';
import style from './TodoItem.module.css';
import Button from '../UI/button/Button';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../redux/slices/todoSlice';
import { useNavigate } from 'react-router-dom';

const TodoItem = ({todo, editTodo, setVisible, deleteTodo}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeHandler = (id) => {
        setVisible(true)
        deleteTodo(id)
    }

    const editHandler = () => {
        editTodo(todo)
        navigate('/edit');
        
    }

    return (
        <div className={todo.completed ?
            style.container + ' ' + style.completed : style.container}>
            <div className={style.content}>
                <div>
                    <span className={style.title}>{todo.title}</span>
                    <div className={style.description}>{todo.description}</div>
                </div>
                <div className={style.date}>
                <span>Дата начала: {todo.startDate}</span>
                    <span>Дата окончания: {todo.endDate}</span>
                </div>
            </div>
            <div className={style.buttons}>
                <label>Выполнена: 
                    <Input checked={todo.completed} 
                    onChange={() =>  dispatch(toggleTodo(todo.id))} 
                    type='checkbox' />
                </label>
                <Button onClick={() => removeHandler(todo.id)}>Удалить</Button>
                <Button onClick={() => editHandler()} className={style.editButton}>Редактировать</Button>
            </div>
        </div>
    )
}

export default TodoItem