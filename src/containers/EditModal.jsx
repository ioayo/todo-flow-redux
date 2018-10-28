import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import type { State, Dispatch } from '../types';
import type { Todo } from '../types/todos';
import { closeEditModal, saveTodo } from '../actions/todo';
import TodoForm from '../components/TodoForm';

type Props = {
  visible: boolean,
  todo: Todo,
  onClose: () => void,
  onSave: (todo: Todo) => void,
}

const TodoModal = ({
  visible, todo, onClose, onSave,
}: Props) => (
  <Modal visible={visible} onClickBackdrop={onClose}>
    <div className="modal-header">
      <h5 className="modal-title">{todo.title}</h5>
    </div>
    <div className="modal-body">
      <TodoForm todo={todo} onSave={onSave} onClose={onClose} />
    </div>
  </Modal>
);

const mapStateToProps = (state: State) => ({
  visible: state.todoState.editModalVisible,
  todo: state.todoState.openedTodo,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: () => {
    dispatch(closeEditModal());
  },
  onSave: (todo: Todo) => {
    dispatch(saveTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
