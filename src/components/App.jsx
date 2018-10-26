import React from 'react';
import FilteredTodoList from '../containers/FilteredTodoList';
import TodoModal from '../containers/TodoModal';
import './App.sass';

const App = () => (
  <div className="app">
    <div className="todos">
      <h1 className="todos__title">Список дел</h1>
      <FilteredTodoList />
      <TodoModal />
    </div>
  </div>
);

export default App;
