import React from 'react';
import style from './TodoFilter.module.css';
import Input from '../UI/input/Input';
import Select from '../UI/select/Select';

const TodoFilter = ({ filterTodo, setFilterTodo }) => {

    const handleStartDateChange = (e) => {
        setFilterTodo(filterTodo.endDate = '');     
        setFilterTodo({...filterTodo, startDate: e.target.value});
    }

    const handleEndDateChange = (e) => {
        setFilterTodo(filterTodo.startDate = '');     
        setFilterTodo({...filterTodo, endDate: e.target.value});
    }

    return (
        <fieldset className={style.search}>
            <legend>Фильтр задач</legend>
            <label>По названию
                <Input placeholder='Поиск...' type='text'
                    value={filterTodo.searchQuery}
                    onChange={(e) => setFilterTodo({
                        ...filterTodo,
                        searchQuery: e.target.value
                    })}
                />
            </label>
            <label>Дата начала
                <Input type='date'
                    value={filterTodo.startDate}
                    onChange={(e) => handleStartDateChange(e)}
                />
            </label>
            <label>Дата окончания
                <Input type='date'
                    value={filterTodo.endDate}
                    onChange={(e) => handleEndDateChange(e)}   
                />
            </label>
            <label>Выбрать
                <Select
                    value={filterTodo.completed}
                    onChange={selected => setFilterTodo({
                        ...filterTodo,
                        completed: selected
                    })} 
                    options={[
                        { name: 'Все', value: 'all' },
                        { name: 'Выполненные', value: 'completed' },
                        { name: 'Не выполненные', value: 'notCompleted' },
                    ]}
                />
            </label>
        </fieldset>
    )
}

export default TodoFilter