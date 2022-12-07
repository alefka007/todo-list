import React, {useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import TodoForm from './pages/TodoForm/TodoForm';
import NoMatch from './components/NoMatch/NoMatch';
import { Routes, Route } from "react-router-dom";
import EditTodoForm from './pages/EditTodoForm/EditTodoForm';


function App() {
    const [todo, setTodo] = useState({});

    return (
        <div className = "App">
            <Routes>
                <Route index path="/" element={<Home editTodo={setTodo} />} />
                <Route path="/create" element={<TodoForm />} />
                <Route path='/edit' element={<EditTodoForm todo={todo} />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;