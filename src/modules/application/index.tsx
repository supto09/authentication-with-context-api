import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "../default/Error";

const Application = () => {
    return <Router>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="*">
                <Error/>
            </Route>
        </Switch>
    </Router>
};

export default Application;
