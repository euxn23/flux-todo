import { keys, config } from '../constants';
import Dispatcher from '../dispatcher';
import ErrorAction from './error-action';
import fetch from 'isomorphic-fetch';

export default class TopicAction {
  static create(task, tasks) {
    if (task.title === '' || task.title.length > 32 || tasks.filter(t => t.title === task.title).length > 0) {
      return ErrorAction.raiseError(keys.error.title);
    }

    return fetch(
      `${config.endpoint}/tasks`,
      {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task)
      }).then(res => res.json()).then(task => {
        Dispatcher.dispatch({type: keys.task.created, task});
        return task;
      }).catch(err => Dispatcher.dispatch({type: keys.error.api, error: err}))
  }

  static remove(task) {
    return fetch(
      `${config.endpoint}/tasks/${task.id}`,
      {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json()).then(() => {
        this.fetch();
      }).catch(err => Dispatcher.dispatch({type: keys.error.api, error: err}))
  }

  static fetch() {
    return fetch(
      `${config.endpoint}/tasks`,
      {
        method: 'GET',
      }).then(res => res.json()).then(tasks => {
        Dispatcher.dispatch({type: keys.task.fetched, tasks});
        return tasks;
      }).catch(err => Dispatcher.dispatch({type: keys.error.api, error: err}))
  }

}
