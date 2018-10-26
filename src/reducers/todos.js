import type {
  TodosState, Todos, Todo, Id,
} from '../types/todos';
import type { Action } from '../types';

const addTodo = (id: Id, todo: Todo): Todo => ({
  ...todo,
  id,
});

const toggleTodo = (todos: Todos, id: Id): Todos => (
  todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
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
  todos: [
    {
      id: 1,
      priority: 'low',
      title: 'First Todo',
      description: 'Some description',
      completed: false,
      deadline: null,
      completedIn: null,
    },
    {
      id: 2,
      priority: 'low',
      title: 'Next Todo',
      description: 'Wow! Seems Work!',
      completed: false,
      deadline: null,
      completedIn: null,
    },
  ],
  openedTodo: {},
  modalVisible: false,
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
    case 'SHOW_TODO_MODAL':
      return {
        ...state,
        modalVisible: true,
      };
    case 'RESET_OPENED_TODO': {
      return {
        ...state,
        openedTodo: initialState.openedTodo,
      };
    }
    case 'CLOSE_TODO_MODAL':
      return {
        ...state,
        modalVisible: false,
      };
    default:
      return state;
  }
};

export default todosReducer;
