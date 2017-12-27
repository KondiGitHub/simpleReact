import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider} from 'react-redux';
import routes from '../server/routes';

render(
    <Provider >
   <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);