import React from 'react';
import style from './TodoPagination.module.css';

const TodoPagination = ({totalTodo, todoPerPages, paginate, currentPage}) => {
    const pageNumber = [];
    
    for (let i = 0; i < Math.ceil(totalTodo / todoPerPages); i++) {
        pageNumber.push(i + 1)
    }

    return (
        <div className={style.container}>
            {pageNumber.map(number => (
                <div 
                    onClick={() => paginate(number)} 
                    key={number}  
                    className={number === currentPage ?
                        style.btnNumber + ' ' + style.activeButton : style.btnNumber}>     
                    {number}
                </div>
            ))}
        </div>
    )
}

export default TodoPagination