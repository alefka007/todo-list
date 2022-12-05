import React from 'react';
import style from './TodoFilter.module.css';
import Input from '../UI/input/Input';
import Select from '../UI/select/Select';

const TodoFilter = ({filterTodo, setFilterTodo}) => {

    return (
        <fieldset className={style.search}>
            <legend>Фильтр задач</legend>
            <label>По названию
                <Input placeholder='Поиск...' type='text'
                    value={filterTodo.query}
                    onChange={(e) => setFilterTodo({
                        ...filterTodo, 
                        query: e.target.value 
                    })}
                />
            </label>
            <label>Дата начала
                <Input type='date'
                    value={filterTodo.sort}
                    onChange={(e) => setFilterTodo({
                        ...filterTodo,
                        startDate: e.target.value 
                    })} 
                />
            </label>
            <label>Дата окончания
                <Input type='date' />
            </label>
            <label>Выбрать  
                <Select options={[
                    {name: 'Все', value: 'all'},
                    {name: 'Выполненные', value: 'completed'},
                    {name: 'Не выполненные', value: 'notCompleted'},
                ]} 
                />
            </label>
        </fieldset>
    )
}

export default TodoFilter