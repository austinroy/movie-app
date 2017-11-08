import {combineReducers} from 'redux';

import movies from './moviesReducer';
import movie from './singleMovieReducer';

export default combineReducers({
  movies,
  movie
});