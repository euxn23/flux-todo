import { ReduceStore } from 'flux/utils';

import { keys } from '../constants';
import Dispatcher from '../dispatcher';


class TaskStore extends ReduceStore {
  getInitialState() {
    return [];
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.task.created: {
        return state.concat(action.task);
      }
      case keys.task.removed: {
        return state.filter(task => task.title !== action.task.title);
      }
      case keys.task.fetched: {
        return action.tasks;
      }
      default:
        return state;
    }
  }
}

export default new TaskStore(Dispatcher);
