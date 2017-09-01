import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';


const rootReducer = combineReducers({
  counterReducer: counterReducer
});

export default rootReducer;

