import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Initialize from "./components/Initialize";
import Footer from "./components/Footer";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <>
                <Navigation />
                <Switch>
                    <Route exact path="/">
                        <Initialize />
                    </Route>
                    <Route path="/overview">
                    </Route>
                    <Route path="/blotter">
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
