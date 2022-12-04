import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import TodoForm from './pages/TodoForm/TodoForm';

const todo = {
    number: 1,
    title: 'Первое дело в списке',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, laudantium.',
    startDate: '04 декабря 2022г',
    endDate: '05 декабря 2022г'
}

function App() {
    const [isHome, setIsHome] = useState(true);

    return (
        <div className = "App">
            {isHome ? 
                <Home setIsHome={setIsHome}  /> : <TodoForm setIsHome={setIsHome} />}
        </div>
    );
}

export default App;