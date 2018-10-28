import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap4-modal';
import type { State, Dispatch } from '../types';
import type { Todo } from '../types/todos';
import { closeCreateModal, saveTodo } from '../actions/todo';
import TodoForm from '../components/TodoForm';

type Props = {
  visible: boolean,
  onClose: () => void,
  onSave: (todo: Todo) => void,
}

const initTodo = {
  title: '',
  description: '',
  completed: false,
  id: -1,
  priority: 'low',
  deadline: '',
  completedIn: null,
};

const TodoModal = ({
  visible, onClose, onSave,
}: Props) => (
  <Modal visible={visible} onClickBackdrop={onClose}>
    <div className="modal-header">
      <h5 className="modal-title">Создать новую задачу</h5>
    </div>
    <div className="modal-body">
      <TodoForm todo={initTodo} onSave={onSave} onClose={onClose} />
    </div>
  </Modal>
);

const mapStateToProps = (state: State) => ({
  visible: state.todoState.createModalVisible,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: () => {
    dispatch(closeCreateModal());
  },
  onSave: (todo: Todo) => {
    dispatch(saveTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
