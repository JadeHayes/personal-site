import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Modal from './components/Modal';
import Home from './components/Home';
import MuayThai from './components/MuayThai';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Outdoors from './components/Outdoors';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

ReactDOM.render(
    <Router>
    <div>
        <Route path='/' component={ App } />
        <Route exact path='/#home' component={ Home } />
        <Route exact path='/#muaythai' component={ MuayThai } />
        <Route exact path='/#resume' component={ Resume } />
        <Route exact path='/#projects' component={ Projects } />
        <Route exact path='/#outdoors' component={ Outdoors } />
    </div>
    </Router>



    , document.getElementById('root'));
