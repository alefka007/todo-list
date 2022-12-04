import React from 'react';
import style from './Input.module.css';

const Input = ({props,...rest}) => {
    return (
        <input className={style.input} {...rest} />
    )
}

export default Input