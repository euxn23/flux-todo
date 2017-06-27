import React, { Component } from 'react';
import { Container } from 'flux/utils';

import TaskForm from '../components/task-form';
import TaskList from '../components/task-list';
import TaskStore from '../stores/task-store';
import ErrorStore from '../stores/error-store';
import TaskAction from '../actions/task-action';


class Root extends Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [
      TaskStore,
      ErrorStore,
    ];
  }

  static calculateState() {
    return {
      appState: {
        tasks: TaskStore.getState(),
        error: ErrorStore.getState(),
      },
    };
  }

  componentDidMount() {
    TaskAction.fetch();
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12" >
          {
            this.state.appState.error &&
            <div className="alert alert-danger" role="alert">
              {this.state.appState.error}
            </div>
          }
        </div>
        <div className="col-md-12">
          <TaskForm appState={this.state.appState} />
        </div>
        <div className="col-md-12" >
          <TaskList appState={this.state.appState} />
        </div>
      </div>
    );
  }
}

const App = Container.create(Root);
export default App;
