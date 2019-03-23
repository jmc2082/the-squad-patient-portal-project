import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';

import App from './App';
import App404Component from './Components/App404Component/App404Component';
import LoginContainer from './Containers/LoginContainer/LoginContainer';
import SignupContainer from './Containers/SignupContainer/SignupContainer';
import DashboardContainer from './Containers/DashboardContainer/DashboardContainer';
import PatientFormContainer from './Containers/PatientFormContainer/PatientFormContainer';
import PatientDataContainer from './Containers/PatientDataContainer/PatientDataContainer';

import * as serviceWorker from './serviceWorker';

const userLoggedIn = localStorage.getItem('patient_user_token');

if (userLoggedIn) {
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={DashboardContainer} />
                    <Route path="/patient-form" exact component={PatientFormContainer} />
                    <Route path="/patient-info" exact component={PatientDataContainer} />
                    <Route component={App404Component} />
                </Switch>
            </App>
        </BrowserRouter>,
        document.getElementById('root'));
} else {
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/" exact component={LoginContainer} />
                    <Route path="/signup" exact component={SignupContainer} />
                    <Route component={App404Component} />
                </Switch>
            </App>
        </BrowserRouter>,
        document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
