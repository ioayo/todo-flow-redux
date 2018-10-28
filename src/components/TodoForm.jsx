import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import type { Todo, Priority } from '../types/todos';
import DateTime from './DateTime';

const getPriorityLabels = (str: Priority):string => {
  switch (str) {
    case 'medium': return 'важная';
    case 'high': return 'очень важная';
    default: return 'обычная';
  }
};

const validateTodo = (todo: Todo):Object => {
  const errors = {};
  if (!todo.title) {
    errors.title = 'Обязательное поле';
  }

  if (!todo.description) {
    errors.description = 'Обязательное поле';
  }

  return errors;
};

type Props = {
  todo: Todo,
  onSave: (todo: Todo) => void,
  onClose: () => void,
}


const TodoForm = ({ todo, onClose, onSave }:Props) => {
  if (Object.keys(todo).length === 0) return null;
  return (
    <Formik
      initialValues={todo}
      validate={validateTodo}
      onSubmit={(values: Todo) => {
        onSave(values);
      }}
      render={({ values, handleChange, errors }) => (
        <Form>
          <div className="form-group">
            <span>Заголовок</span>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>
          <div className="form-group">
            <span>Описание</span>
            <Field className="form-control" type="text" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <div className="form-group">
            <span>Приоритет задачи</span>
            <Field className="form-control" component="select" name="priority" id="priority">
              <option value="low">{getPriorityLabels('low')}</option>
              <option value="medium">{getPriorityLabels('medium')}</option>
              <option value="high">{getPriorityLabels('high')}</option>
            </Field>
          </div>
          <div className="form-group">
            <span>Дедлайн</span>
            <Field component={DateTime} name="deadline" />
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="completed">
              <input
                className="form-check-input"
                id="completed"
                type="checkbox"
                name="completed"
                defaultChecked={values.completed}
                onChange={handleChange}
              />
              Пометить как выполненную
            </label>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Закрыть
            </button>
            <button type="submit" className="btn btn-success" disabled={Object.keys(errors).length > 0}>
              Сохранить
            </button>
          </div>
        </Form>
      )}
    />
  );
};

export default TodoForm;
