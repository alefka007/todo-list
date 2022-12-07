import React from 'react';
import style from './Alert.module.css';

const Alert = () => {
  return (
    <span className={style.alert}>Не все поля заполнены!</span>
  )
}

export default Alert