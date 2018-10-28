import React from 'react';
import { connect } from 'react-redux';
import { showCreateModal } from '../actions/todo';
import type { Dispatch } from '../types';

type Props = {
  showCreateTodoModal: () => void
}

const TodosHeader = ({ showCreateTodoModal }: Props) => (
  <div className="todos__header">
    <h1 className="todos__title">Список дел</h1>
    <button type="button" onClick={showCreateTodoModal} className="btn btn-primary">Добавить задачу</button>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showCreateTodoModal: () => dispatch(showCreateModal()),
});

export default connect(null, mapDispatchToProps)(TodosHeader);
