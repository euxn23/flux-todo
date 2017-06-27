import React, { Component } from 'react';

import TaskAction from '../actions/task-action';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const taskList = this.props.appState.tasks.map(task => <Task key={task.title} task={task} />);
    return (
      <div>
        {taskList}
      </div>
    );
  }
}


class Task extends Component {
  handleTaskRemove(ev) {
    ev.preventDefault();
    TaskAction.fetch().then(() => TaskAction.remove(this.props.task));
  }

  render() {
    return (
      <div className="form-group">
        <div className="col-md-3">
          <p>{this.props.task.title}</p>
        </div>
        <div className="col-md-7">
          <p>{this.props.task.description}</p>
        </div>
        <div className="col-md-2">
          <button type="button" className="btn btn-danger" onClick={ev => this.handleTaskRemove(ev)} >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
