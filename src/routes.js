import React from 'react';
import {Route, Switch} from 'react-router';
import App from './App';
import LandingPage from './components/Landing/LandingPage';
import MoviePage from './components/MoviePage/MoviePage';

const Routes = () => (
    <App>
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/movie/:id" component={MoviePage} />
    </Switch>
    </ App>
)

export default Routes;
