import * as actionTypes from './actionTypes'

const initialState = {
    todoList: null,
    todoItem: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.SET_TODO) :
            return {
                ...state,
                todoList: action.todos,
                todoItem: action.todos
            }
        case(actionTypes.SEARCH_TODO) :
            const todoItemFilter = state.todoList.filter(todoItem => todoItem.todo.toLowerCase().search(action.value.toLowerCase()) !== -1 );
            return {
                ...state,
                todoItem: todoItemFilter
            }
        case(actionTypes.ADD_TODO) : 
            return {
                ...state,
                todoList: state.todoItem.concat(action.todo),
                todoItem: state.todoItem.concat(action.todo)
            }
        case(actionTypes.EDIT_TODO) :
            const updatedTodo = state.todoList.map(todoItem => todoItem._id === action.todo._id ? {...todoItem, ...action.todo} : todoItem);
            return {
                ...state,
                todoList: updatedTodo,
                todoItem: updatedTodo
            }
        case(actionTypes.DELETE_TODO) : 
            const todoListFilter = state.todoList.filter(todoItem => todoItem._id !== action.id);
            return {
                ...state,
                todoList: todoListFilter,
                todoItem: todoListFilter
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