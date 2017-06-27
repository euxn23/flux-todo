import { ReduceStore } from 'flux/utils';

import { keys, messages } from '../constants';
import Dispatcher from '../dispatcher';


class ErrorStore extends ReduceStore {
  getInitialState() {
    return '';
  }
  reduce(state, action) {
    switch(action.type) {
      case keys.error.clear:
        return '';
      case keys.error.api:
        return messages.error.api;
      case keys.error.title:
        return messages.error.title;
      default:
        return state;
    }
  }
}

export default new ErrorStore(Dispatcher);
