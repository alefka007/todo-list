export const getPageCount = (todoCount, limit) => {
    return Math.ceil(todoCount / limit)
}

export const createNumberPagination = (pageCount) => {
    const numberArr = [];

    for(let i = 0; i < pageCount; i++) {
        numberArr.push(i + 1);
    }

    return numberArr
}