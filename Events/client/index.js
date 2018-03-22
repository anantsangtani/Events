import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './component/app';
import Contact from './component/contact';
import About from './component/about';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
    </Router>

), document.getElementById("root"));     