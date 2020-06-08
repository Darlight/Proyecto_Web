import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/addTodo';
import TodoForm from './TodoForm';

class TodoCreate extends Component {
  onSubmit = formValues => {
    this.props.addTodo(formValues);
  };

  render() {
    return (
      <div style={{ marginTop: '2rem' }}>
        <TodoForm destroyOnUnmount={false} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoCreate);