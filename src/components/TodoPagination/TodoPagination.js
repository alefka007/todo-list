import React from 'react';
import style from './TodoPagination.module.css';

const TodoPagination = ({numberArr}) => {

    const pageButtonHandler = (p) => {
        console.log(p)
    }

  return (
    <div className={style.container}>
        {numberArr.map(p => {
            return <div 
                    onClick={() => pageButtonHandler(p)} 
                    key={p} 
                    className={style.numberPage}>{p}
                </div>
            })
        }
    </div>
  )
}

export default TodoPagination