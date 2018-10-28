export type Id = string;

export type Priority = 'low' | 'medium' | 'high';

export type Todo = {
  +id: Id,
  +title: string,
  +description: string,
  +completed: boolean,
  +priority: Priority,
  +deadline: string | '',
  +completedIn: string | ''
};

export type Todos = Array<Todo>;

export type TodosState = {
  todos: Todos,
  openedTodo: Object,
  editModalVisible: boolean,
  createModalVisible: boolean
}

export type TodosAction =
  | { type: 'ADD_TODO', +id: Id, +todo: Todo }
  | { type: 'REMOVE_TODO', +id: Id }
  | { type: 'TOGGLE_TODO', +id: Id }
  | { type: 'CHANGE_PRIORITY', +id: Id, priority: Priority }
  | { type: 'CHANGE_TODO', +id: Id }
  | { type: 'SHOW_EDIT_MODAL' }
  | { type: 'CLOSE_EDIT_MODAL' }
  | { type: 'SAVE_TODO', +todo: Todo }
  | { type: 'RESET_OPENED_TODO' }
  | { type: 'SHOW_CREATE_MODAL' }
  | { type: 'CLOSE_CREATE_MODAL' }
