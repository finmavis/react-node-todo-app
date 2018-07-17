import axios from 'axios';

import * as actionTypes from './actionTypes';

const setTodo = todos => {
    return {
        type: actionTypes.SET_TODO,
        todos: todos
    }
}

export const fetchTodo = () => {
    return dispatch => {
        axios.get("/api/todos")
            .then(todos => {
                dispatch(setTodo(todos.data))
            })
            .catch(err => {
                dispatch(fetchFail({status: err.response.status, statusText: err.response.statusText}));
            })
    }
}

export const searchTodo = value => {
    return {
        type: actionTypes.SEARCH_TODO,
        value: value
    }
}

export const postTodo = todo => {
    return dispatch => {
        axios.post('/api/todos', todo)
            .then(resTodos => {
                dispatch(addTodo(resTodos.data))
            })
            .catch(err => {
                dispatch(fetchFail({status: err.response.status, statusText: err.response.statusText}));
            })
    }
}

export const addTodo = todo => {
    return {
        type: actionTypes.ADD_TODO,
        todo: todo
    }
}

export const putTodo = (id, todo) => {
    return dispatch => {
        axios.put('/api/todos/' + id, todo)
            .then(res => {
                dispatch(editTodo(res.data));
            })
            .catch(err => {
                dispatch(fetchFail({status: err.response.status, statusText: err.response.statusText}));
            })
    }
}

export const editTodo = todo => {
    return {
        type: actionTypes.EDIT_TODO,
        todo: todo
    }
}

export const deleteTodoServer = id => {
    return dispatch => {
        axios.delete('/api/todos/' + id)
            .then(res => {
                dispatch(deleteTodo(res.data._id))
            })
            .catch(err => {
                dispatch(fetchFail({status: err.response.status, statusText: err.response.statusText}));
            })
    }
}

export const deleteTodo = id => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
}

export const fetchFail = err => {
    return {
        type: actionTypes.FETCH_FAIL,
        err: err
    }
}

export const acknowledgeError = () => {
    return {
        type: actionTypes.ACKNOWLEDGE_ERROR,
    }
}