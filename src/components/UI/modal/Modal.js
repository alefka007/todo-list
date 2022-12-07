import React from 'react';
import Button from '../button/Button';
import style from './Modal.module.css';
import { deleteTodo } from '../../../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const Modal = ({visible, setVisible, todoId}) => {

    const dispatch = useDispatch();

    const buttonHandler = () => {
        dispatch(deleteTodo(todoId));
        setVisible(false);
    }

    return (
        <div className={visible ? style.container + ' ' + style.visibleModal : style.container}>
            <div className={style.content}>
                <span>Вы уверенны что хотите удалить?</span>
                <div className={style.buttons}>
                    <Button onClick={() => buttonHandler()}>Да</Button>
                    <Button onClick={() => setVisible(false)}>Нет</Button>
                </div>
            </div>
        </div>
    )
}

export default Modal