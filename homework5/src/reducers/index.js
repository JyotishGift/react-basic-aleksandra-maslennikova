import { combineReducers } from 'redux';

import counterReducer from './counter-reducer';
import recipesReducer from './recipes-reducer';


const rootReducer = combineReducers({
  counterReducer: counterReducer,
  recipesReducer: recipesReducer
});

export default rootReducer;

