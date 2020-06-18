import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import movieReducer from './movieReducer';
import routeReducer from './routeReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
  routes: routeReducer
});

export default rootReducers;
