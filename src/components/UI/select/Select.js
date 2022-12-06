import React from 'react';
import style from './Select.module.css';

const Select = ({ options, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)} 
            className={style.select}>
            {options.map(o => {
                return <option key={o.name} value={o.value} >{o.name}</option>
            })}
        </select>
    )
}

export default Select