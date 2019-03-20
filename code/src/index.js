import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss'

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <div className="router-wrap">
                <App />
            </div>
        </Router>
    </Provider>
), document.getElementById('root'));


//serviceWorker.unregister();
