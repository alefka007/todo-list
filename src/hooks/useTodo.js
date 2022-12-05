import React, { useMemo } from "react";

const useSortedTodo = (todoList, sort) => {
    const sortedTodoList = useMemo(() => {
        
        if (sort) {
            return [...todoList].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return todoList
    
    }, [sort, todoList])

    return sortedTodoList
}

export const useTodo = (todoList, sort, query) => {
    const sortedTodoList = useSortedTodo(todoList, sort);

    const sortedAndSearchTodo = useMemo(() => {

        return sortedTodoList.filter(todo => todo.title.toLowerCase().includes(query))
    }, [query, sortedTodoList])

    return sortedAndSearchTodo
}