import { combineReducers } from 'redux';
import tasks from './tasks';
import auth from './auth';


const appReducer = combineReducers({
  auth,
  tasks
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;