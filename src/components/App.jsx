import React from 'react';
import FilteredTodoList from '../containers/FilteredTodoList';
import EditModal from '../containers/EditModal';
import CreateModal from '../containers/CreateModal';
import TodosHeader from '../containers/TodosHeader';
import './App.sass';

const App = () => (
  <div className="app">
    <div className="todos">
      <TodosHeader />
      <FilteredTodoList />
      <EditModal />
      <CreateModal />
    </div>
  </div>
);

export default App;
