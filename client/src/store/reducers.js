import * as actionTypes from './actionTypes'

const initialState = {
    todoList: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.SET_TODO) :
            return {
                ...state,
                todoList: action.todos
            }
        case(actionTypes.ADD_TODO) : 
            return {
                ...state,
                todoList: state.todoItem.concat(action.todo)
            }
        case(actionTypes.EDIT_TODO) :
            const updatedTodo = state.todoList.map(todoItem => todoItem._id === action.todo._id ? {...todoItem, ...action.todo} : todoItem);
            return {
                ...state,
                todoList: updatedTodo
            }
        case(actionTypes.DELETE_TODO) : 
            const todoListFilter = state.todoList.filter(todoItem => todoItem._id !== action.id);
            return {
                ...state,
                todoList: todoListFilter
            }
        case(actionTypes.FETCH_FAIL) : 
            return {
                ...state,
                error: action.err
            }
        case(actionTypes.ACKNOWLEDGE_ERROR) : 
            return {
                ...state,
                error: null
            }
        default : return state
    }
}

export default reducer;