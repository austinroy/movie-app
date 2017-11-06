import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import LandingPage from './components/Landing/LandingPage';
import MoviePage from './components/MoviePage/MoviePage';

export default (
    <Route path="/" component ={App}>
        <IndexRoute component={LandingPage} />
        <Route path="movie/:id" component={MoviePage} />
    </Route>
)
