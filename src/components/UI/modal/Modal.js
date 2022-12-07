import React from 'react';
import Button from '../button/Button';
import style from './Modal.module.css';

const Modal = ({visible, setVisible, removeTodo}) => {
    return (
        <div className={visible ? style.container + ' ' + style.visibleModal : style.container}>
            <div className={style.content}>
                <span>Вы уверенны что хотите удалить?</span>
                <div className={style.buttons}>
                    <Button onClick={(e) => removeTodo(e)}>Да</Button>
                    <Button onClick={() => setVisible(false)}>Нет</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal