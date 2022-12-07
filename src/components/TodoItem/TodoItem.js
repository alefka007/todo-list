import React from 'react';
import Input from '../UI/input/Input';
import style from './TodoItem.module.css';
import Button from '../UI/button/Button';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/slices/todoSlice';

const TodoItem = ({ todo, setVisible, removeTodo}) => {
    const dispatch = useDispatch();

    removeTodo = () => {
        dispatch(deleteTodo(todo.id))
    }

    const onChangeHandler = (e) => {
        dispatch(toggleTodo(todo.id))
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
                    <label>Дата начала: <span>{todo.startDate}</span></label>
                    <label>Дата окончания: <span>{todo.endDate}</span></label>
                </div>
            </div>
            <div className={style.buttons}>
                <label>Выполнена: 
                    <Input checked={todo.completed} 
                    onChange={(e) => onChangeHandler(e)} 
                    type='checkbox' />
                </label>
                <Button onClick={() => setVisible(true)}>Удалить</Button>
                <Button className={style.editButton}>Редактировать</Button>
            </div>
        </div>
    )
}

export default TodoItem