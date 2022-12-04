import React from 'react';
import style from './Select.module.css';

const Select = ({ options }) => {
    return (
        <select className={style.select}>
            {options.map(o => {
                return <option key={o.name} value={o.value} >{o.name}</option>
            })}
        </select>
    )
}

export default Select