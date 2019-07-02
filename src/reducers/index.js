import { combineReducers } from 'redux';
import rootReducer from './root.reducer';

const reducers = () =>
  combineReducers({
    root: rootReducer
  });

export default reducers;