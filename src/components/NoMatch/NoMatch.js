import React from 'react';
import style from './NoMatch.module.css';

const NoMatch = () => {
    return (
        <div className={style.noMatch}>
            Упс! Такой страницы не существует
        </div>
    )
}

export default NoMatch