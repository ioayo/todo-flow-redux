import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
// flow cannot handle error below, even with flow-typed
// $FlowFixMe
import 'moment/locale/ru';
import type { Todo } from '../types/todos';

type Props = {
    field: {
        onChange: (value: string) => void,
        onBlur: () => void,
        name: string
    },
    form: {
        setFieldValue: (field: string, value: string) => void,
        values: Todo
    }
}
class DateTime extends Component<Props> {
  handleChange = (value: moment) => {
    const { form, field } = this.props;
    form.setFieldValue(field.name, value.format('DD MMMM YYYY, hh:mm'));
  }

  render() {
    const { field, form, ...rest } = this.props;
    const { values } = form;
    return (
      <Datetime
        {...rest}
        onChange={this.handleChange}
        defaultValue={values.deadline}
        locale="ru"
      />
    );
  }
}

export default DateTime;
