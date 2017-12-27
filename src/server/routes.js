import React from 'react';
import { Route, IndexLink } from 'react-router';
import App from '../client/components/App';
import HomePage from '../client/components/HomePage';
import AboutPage from '../client/components/AboutPage';

export default (
    <Route path="/" component={App}>
        <IndexLink component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
)