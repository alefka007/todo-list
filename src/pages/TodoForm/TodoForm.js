import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/UI/button/Button';
import Input from '../../components/UI/input/Input';
import style from './TodoForm.module.css';
import { addTodo } from '../../redux/slices/todoSlice'
import { nanoid } from '@reduxjs/toolkit';

const TodoForm = ({ setIsHome }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);
    const onStartDateChanged = e => setStartDate(e.target.value);
    const onEndDateChanged = e => setEndDate(e.target.value);    

    const submitHandler = (e) => {
        e.preventDefault();

        if(title && description && startDate && endDate) {
            dispatch(addTodo({
                id: nanoid(),
                completed: false,
                title,
                description,
                startDate,
                endDate,
            }))

            setTitle('');
            setDescription('');
            setStartDate('');
            setEndDate('');
            setIsHome(true)

        }

    }

    return ( 
        <form onSubmit={(e) => submitHandler(e)} className={style.form}>
            <Input onChange={onTitleChanged} value={title} placeholder='Введите название' type='text' />
            <textarea onChange={onDescriptionChanged} value={description}></textarea>
            <div className={style.inputContainer}>
                <Input onChange={onStartDateChanged} value={startDate} type='date' />
                <Input onChange={onEndDateChanged} value={endDate} type='date' />
            </div>
            <Button type='submit'>Сохранить</Button>
        </form>
    )
}

export default TodoForm