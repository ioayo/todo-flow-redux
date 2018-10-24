export type Id = number;
export type Text = string;

export type Priority = 'low' | 'medium' | 'high';

export type Todo = {
  +id: Id,
  +title: Text,
  +description: Text,
  +completed: boolean,
  +priority: Priority,
  +deadline: Date | null,
  +completedIn: Date
};

export type Todos = Array<Todo>;

export type TodosState = {
  +todos: Todos
}

export type TodosAction =
   | { type: 'ADD_TODO', +id: Id, +todo: Todo }
   | { type: 'REMOVE_TODO', +id: Id }
   | { type: 'TOGGLE_TODO', +id: Id }
   | { type: 'CHANGE_PRIORITY', +id: Id, priority: Priority }
