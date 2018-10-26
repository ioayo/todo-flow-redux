import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import type { State, Dispatch } from '../types';
import type { Todo } from '../types/todos';
import { closeModal, saveTodo } from '../actions/todo';
import TodoEditForm from '../components/TodoEditForm';

type Props = {
  visible: boolean,
  todo: Todo,
  onClose: () => void,
  onSave: (todo: Todo) => void,
}

class TodoModal extends Component<Props> {
  saveTodo = () => {
    const { todo, onSave } = this.props;
    onSave(todo);
  }

  render() {
    const {
      visible, todo, onClose,
    } = this.props;
    return (
      <Modal visible={visible} onClickBackdrop={onClose}>
        <div className="modal-header">
          <h5 className="modal-title">{todo.title}</h5>
        </div>
        <div className="modal-body">
          <TodoEditForm todo={todo} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.saveTodo}>
            Panic
          </button>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Fire phasers
          </button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state: State) => ({
  visible: state.todoState.modalVisible,
  todo: state.todoState.openedTodo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: () => {
    dispatch(closeModal());
  },
  onSave: (todo: Todo) => {
    dispatch(saveTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
