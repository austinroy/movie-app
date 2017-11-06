import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, browserHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root'));
registerServiceWorker();
