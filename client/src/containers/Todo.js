import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions';

import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import Modal from '../components/Modal';
import Spinner from '../components/Spinner';
import ModalError from '../components/ModalError';

class Todo extends Component {
    state = {
        modal: false,
        id: '',
        todo: '',
        modeModal: 'Add',
        completed: false,
        search: ''
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal, 
            id:'', 
            todo: '', 
            completed: false, 
            modeModal: 'Add'
        })
    }

    inputHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    checkboxHandle = () => {
        this.setState({completed: !this.state.completed})
    }

    addTodo = () => {
        const todo = {
            todo: this.state.todo.trim(),
            completed: this.state.completed
        }
        this.props.postTodo(todo);
        this.toggleModal();
    }

    openEditTodo = (id) => {
        const selectedTodo = this.props.todoList.find(todo => todo._id === id);
        this.setState({
            modal: !this.state.modal, 
            id: selectedTodo._id, 
            todo: selectedTodo.todo, 
            completed: selectedTodo.completed, 
            modeModal: 'Edit'
        })
    }

    editTodo = () => {
        const todo = {
            todo: this.state.todo.trim(),
            completed: this.state.completed
        }
        this.props.editTodo(this.state.id, todo);
        this.toggleModal();
    }

    render() {
        let filteredTodo;
        let todoContent = <Spinner />
        if(this.props.todoList) {
            filteredTodo = this.props.todoList.filter(item => item.todo.toLowerCase().search(this.state.search.toLowerCase()) !== -1 );
            todoContent = <TodoList todos={filteredTodo} deleteTodo={(id) => this.props.deleteTodo(id)} edit={(id) => this.openEditTodo(id)} />
        }
        if(this.props.error) {
            todoContent = <ModalError isOpen={this.props.error} toggleModal={this.props.acknowledgeError} error={this.props.error} />
        }
        return (
            <div className="wrapper d-flex justify-content-center">
                <div className="todo-wrap">
                    <TodoHeader search={(e) => this.inputHandle(e)} toggleModal={this.toggleModal} />
                    { todoContent }
                </div>
                <Modal 
                    isOpen={this.state.modal} 
                    toggleModal={this.toggleModal}
                    title={this.state.modeModal}
                    todo={this.state.todo}
                    completed={this.state.completed}
                    inputHandle={(e) => this.inputHandle(e)}
                    checkboxHandle={this.checkboxHandle}
                    save={this.state.modeModal === 'Add' ? this.addTodo : this.editTodo} />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTodos: () => dispatch(actionCreators.fetchTodo()),
        postTodo: (todo) => dispatch(actionCreators.postTodo(todo)),
        editTodo: (id, todo) => dispatch(actionCreators.putTodo(id, todo)),
        deleteTodo: (id) => dispatch(actionCreators.deleteTodoServer(id)),
        acknowledgeError: () => dispatch(actionCreators.acknowledgeError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);