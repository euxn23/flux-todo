import React, { Component } from 'react';

import TaskAction from '../actions/task-action';


export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  onTitleChange(ev) {
    ev.preventDefault();
    this.setState({title: ev.target.value.trim()});
  }

  onDescriptionChange(ev) {
    ev.preventDefault();
    this.setState({description: ev.target.value.trim()});
  }

  handleTaskCreate(ev) {
    ev.preventDefault();
    TaskAction.create(this.state, this.props.appState.tasks);
    this.setState({title: ''});
    this.setState({description: ''});
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="col-md-3">
            <input
              type="text" name="name" className="form-control"
              placeholder="Title"
              value={this.state.title} onChange={ev => this.onTitleChange(ev)}
            />
          </div>
          <div className="col-md-7">
            <input
              type="text" name="name" className="form-control"
              placeholder="Description"
              value={this.state.description} onChange={ev => this.onDescriptionChange(ev)}
            />
          </div>
          <div className="col-md-2">
            <button type="button" className="btn btn-success" onClick={ev => this.handleTaskCreate(ev)} >
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
}
