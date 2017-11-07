import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
