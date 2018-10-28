import moment from 'moment';
import type {
  TodosState, Todos, Todo, Id,
} from '../types/todos';
import type { Action } from '../types';

const changeToggledTodo = (todo: Todo): Todo => {
  if (todo.completed) {
    return {
      ...todo,
      completed: false,
      completedIn: '',
    };
  }
  return {
    ...todo,
    completed: true,
    completedIn: moment().format(),
  };
};

const addTodo = (id: Id, todo: Todo): Todo => ({
  ...todo,
  id,
});

const toggleTodo = (todos: Todos, id: Id): Todos => (
  todos.map(t => (t.id === id ? changeToggledTodo(t) : t))
);

const removeTodo = (todos: Todos, id: Id): Todos => (
  todos.filter(todo => todo.id !== id)
);

const changeTodo = (todos: Todos, todo: Todo): Todos => (
  todos.map(t => (t.id === todo.id ? todo : t))
);

const getTodo = (todos: Todos, id: Id): Todo | {} => {
  const todo = todos.find(t => t.id === id);
  if (!todo) return {};
  return todo;
};

const initialState = {
  todos: [],
  openedTodo: {},
  editModalVisible: false,
  createModalVisible: false,
};

const todosReducer = (state: TodosState = initialState, action: Action): TodosState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, addTodo(action.id, action.todo)],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: toggleTodo(state.todos, action.id),
      };
    case 'CHANGE_TODO': {
      return {
        ...state,
        openedTodo: getTodo(state.todos, action.id),
      };
    }
    case 'SAVE_TODO':
      return {
        ...state,
        todos: changeTodo(state.todos, action.todo),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: removeTodo(state.todos, action.id),
      };
    case 'SHOW_EDIT_MODAL':
      return {
        ...state,
        editModalVisible: true,
      };
    case 'RESET_OPENED_TODO': {
      return {
        ...state,
        openedTodo: initialState.openedTodo,
      };
    }
    case 'CLOSE_EDIT_MODAL':
      return {
        ...state,
        editModalVisible: false,
      };
    case 'SHOW_CREATE_MODAL':
      return {
        ...state,
        createModalVisible: true,
      };
    case 'CLOSE_CREATE_MODAL':
      return {
        ...state,
        createModalVisible: false,
      };
    default:
      return state;
  }
};

export default todosReducer;
