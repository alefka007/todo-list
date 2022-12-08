import style from './EditTodoForm.module.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert/Alert';
import { editTodo } from '../../redux/slices/todoSlice';

const EditTodoForm = ({todo}) => {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [startDate, setStartDate] = useState(todo.startDate);
    const [endDate, setEndDate] = useState(todo.endDate);
    const [showAlert, setShowAlert] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onTitleChanged = e => {
        setTitle(e.target.value);
        setShowAlert(false);
    };
    const onDescriptionChanged = e => {
        setDescription(e.target.value);
        setShowAlert(false);
    };
    const onStartDateChanged = e => {
        setStartDate(e.target.value);
        setShowAlert(false);
    };
    const onEndDateChanged = e => {
        setEndDate(e.target.value);
        setShowAlert(false);
    };    

    const submitHandler = (e) => {
        e.preventDefault();

        if(title && description && startDate && endDate) {
            dispatch(editTodo({
                id: todo.id,
                completed: todo.completed,
                title,
                description,
                startDate,
                endDate,
            }))

            setTitle('');
            setDescription('');
            setStartDate('');
            setEndDate('');

            navigate('/');

        } else {
            setShowAlert(true)
        }

    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className={style.form}>
            {showAlert && <Alert />}
            <h2>Редактирование задачи</h2>
            <label>Название
                <Input onChange={onTitleChanged} value={title} type='text' />
            </label>
            <label>Описание
                <textarea 
                    onChange={onDescriptionChanged}
                    value={description}
                /> 
            </label>
            <div className={style.inputContainer}>
                <label>Дата начала
                    <Input onChange={onStartDateChanged} value={startDate} type='date' />
                </label> 
                <label>Дата окончания
                    <Input onChange={onEndDateChanged} value={endDate} type='date' />
                </label>
            </div>
            <Button type='submit'>Сохранить</Button>
        </form>
    )
}

export default EditTodoForm
