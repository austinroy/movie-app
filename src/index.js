import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import {Provider} from 'react-redux';

const initialState = {};

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
