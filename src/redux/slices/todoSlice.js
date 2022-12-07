import { createSlice } from "@reduxjs/toolkit";

const getStorageTodo = () => {
    const todoList = window.localStorage.getItem('todoList');

    if(todoList) {
        return JSON.parse(todoList);
    }

    window.localStorage.setItem('todoList', JSON.stringify([]));

    return []
}

const initialState = {
    todoList: getStorageTodo()
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.unshift(action.payload);
            const todoList = window.localStorage.getItem('todoList');

            if(todoList) {
                const todoListArr = JSON.parse(todoList);

                todoListArr.unshift({
                    ...action.payload
                })

                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));

            }
        },
        deleteTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');

            if(todoList) {
                const todoListArr = JSON.parse(todoList);

                const newTodoList = todoListArr.filter(todo => todo.id !== action.payload)
    
                window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
                state.todoList = newTodoList
            }
        },
        toggleTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');

            if(todoList) {
                const todoListArr = JSON.parse(todoList);

                todoListArr.forEach((todo, index) => {
                    if(todo.id === action.payload) {
                        todoListArr[index].completed = !todo.completed
                    }
                    
                })
                
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr
            }
        },
        editTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todoList');
            if(todoList) {
                const todoListArr = JSON.parse(todoList);

                todoListArr.forEach((todo, index) => {
                    if(todo.id === action.payload.id) {
                        todoListArr[index] = action.payload
                    }
                    
                })
                
                window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
                state.todoList = todoListArr
            }
        }
    }
})

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;