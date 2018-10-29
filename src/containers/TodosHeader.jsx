import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showCreateModal, changeFilter } from '../actions/todo';
import type { Dispatch, State } from '../types';
import type { Filter } from '../types/todos';

type Props = {
  showCreateTodoModal: () => void,
  changeTodoFilter: (filter: string) => void,
  filter: Filter,
}

class TodosHeader extends Component<Props> {
  onSelectChange = (e: SyntheticInputEvent<HTMLSelectElement>) => {
    const { changeTodoFilter } = this.props;
    changeTodoFilter(e.target.value);
  }

  render() {
    const { showCreateTodoModal, filter } = this.props;
    return (
      <div className="todos__header">
        <h1 className="todos__title">Список дел</h1>
        <div className="todos__filter">
          <select value={filter} onChange={this.onSelectChange} name="priority" id="priority">
            <option value="all">Все</option>
            <option value="low">Обычные</option>
            <option value="medium">Важные</option>
            <option value="high">Очень важные</option>
          </select>
        </div>
        <button type="button" onClick={showCreateTodoModal} className="btn btn-primary">Добавить задачу</button>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  filter: state.todoState.filter,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  showCreateTodoModal: () => dispatch(showCreateModal()),
  changeTodoFilter: (filter: Filter) => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosHeader);
