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
        name: string,
        value: string
    },
    form: {
        setFieldValue: (field: string, value: string) => void,
        setFieldTouched: (field: string, value: boolean) => void,
        initialValues: Todo,
        errors: Object,
        touched: Object,
    }
}

type State = {
  deadline: string
}
class DateTime extends Component<Props, State> {
  state = {
    deadline: '',
  }

  static getDerivedStateFromProps = (props: Props) => {
    const { field } = props;
    return {
      deadline: field.value ? moment(field.value).format('DD MMMM YYYY, HH:mm') : '',
    };
  }

  handleChange = (value: moment | '') => {
    const { form, field } = this.props;
    form.setFieldValue(field.name, value ? value.format() : '');
  }

  handleBlur = () => {
    const { form, field } = this.props;
    form.setFieldTouched(field.name, true);
  }

  render() {
    const { field, form } = this.props;
    const {
      errors, touched,
    } = form;
    const { deadline } = this.state;
    return (
      <div>
        <Datetime
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          defaultValue={deadline}
          inputProps={{ value: deadline }}
          locale="ru"
        />
        {touched[field.name]
          && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );
  }
}

export default DateTime;
