import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import moment from 'moment';
import type { Todo, Priority } from '../types/todos';
import DateTime from './DateTime';

export const getPriorityLabel = (str: Priority):string => {
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

  if (moment().isAfter(todo.deadline)) {
    errors.deadline = 'Время течет вперед. Укажите будущее время.';
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
      enableReinitialize="true"
      onSubmit={(values: Todo, { resetForm }) => {
        onSave(values);
        resetForm(todo);
      }}
      render={({
        isValid,
      }) => (
        <Form>
          <div className="form-group">
            <span>Заголовок</span>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage className="error" name="title" component="div" />
          </div>
          <div className="form-group">
            <span>Описание</span>
            <Field className="form-control" type="text" name="description" />
            <ErrorMessage className="error" name="description" component="div" />
          </div>
          <div className="form-group">
            <span>Приоритет задачи</span>
            <Field className="form-control" component="select" name="priority" id="priority">
              <option value="low">{getPriorityLabel('low')}</option>
              <option value="medium">{getPriorityLabel('medium')}</option>
              <option value="high">{getPriorityLabel('high')}</option>
            </Field>
          </div>
          <div className="form-group">
            <span>Дедлайн</span>
            <Field component={DateTime} name="deadline" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Закрыть
            </button>
            <button type="submit" className="btn btn-success" disabled={!isValid}>
              Сохранить
            </button>
          </div>
        </Form>
      )}
    />
  );
};

export default TodoForm;
