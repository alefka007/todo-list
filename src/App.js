import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import TodoForm from './pages/TodoForm/TodoForm';
import NoMatch from './components/NoMatch/NoMatch';
import { Routes, Route } from "react-router-dom";


function App() {
    return (
        <div className = "App">
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/form" element={<TodoForm />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;