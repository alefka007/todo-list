import React, { useMemo } from "react";

const useSortedCompleted = (todoList, filterTodo) => {
    const sortedCompletedTodo = useMemo(() => {

        if (filterTodo.completed === 'completed') {
            return todoList.filter(todo => todo.completed === true);

        } else if(filterTodo.completed === 'notCompleted') { 
            return todoList.filter(todo => todo.completed === false);

        } else {    
            return todoList 
        }

    }, [filterTodo.completed, todoList])

    return sortedCompletedTodo 
}

const useSortedDate = (todoList, filterTodo) => {
    const sortedCompleted = useSortedCompleted(todoList, filterTodo);

    const sortedDateTodo = useMemo(() => {

        if (filterTodo.startDate) {
            return sortedCompleted.filter(todo => todo.startDate === filterTodo.startDate);

        } else if(filterTodo.endDate) { 
            return sortedCompleted.filter(todo => todo.endDate === filterTodo.endDate);

        } else {    
            return sortedCompleted 
        }
        
    }, [filterTodo.startDate, filterTodo.endDate, sortedCompleted ])

    return sortedDateTodo
}

export const useSortedTodo = (todoList, filterTodo) => {
    const sortedDate = useSortedDate(todoList, filterTodo);

    const sortedAndSearchTodo = useMemo(() => {

        return sortedDate.filter(todo => todo.title.toLowerCase().includes(filterTodo.searchQuery));

    }, [filterTodo.searchQuery, sortedDate])

    return sortedAndSearchTodo
}