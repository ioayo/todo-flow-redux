import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import type { Todo, Priority } from '../types/todos';

type Props = {
  todo: Todo
}

const getPriorityLabels = (str: Priority):string => {
  switch (str) {
    case 'medium': return 'важная';
    case 'high': return 'очень важная';
    default: return 'обычная';
  }
};

class TodoEditForm extends Component<Props> {
  componentDidMount() {
  }

  render() {
    const { todo } = this.props;
    if (Object.keys(todo).length === 0) return <div />;
    return (
      <Formik
        initialValues={todo}
        render={({ values, handleChange }) => (
          <Form>
            <div className="form-group">
              <span>Заголовок</span>
              <Field className="form-control" type="text" name="title" />
            </div>
            <div className="form-group">
              <span>Описание</span>
              <Field className="form-control" type="text" name="description" />
            </div>
            <div className="form-group">
              <span>Приоритет задачи</span>
              <Field className="form-control" component="select" name="priority" id="priority">
                <option value="low">{getPriorityLabels('low')}</option>
                <option value="medium">{getPriorityLabels('medium')}</option>
                <option value="high">{getPriorityLabels('high')}</option>
              </Field>
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
          </Form>
        )}
      />
    );
  }
}

export default TodoEditForm;
