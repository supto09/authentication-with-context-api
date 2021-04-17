import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "../default/Error";

const Auth = () => {
    return <Router>
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/signup">
                <Signup/>
            </Route>
            <Route path="*">
                <Error/>
            </Route>
        </Switch>
    </Router>

}

export default Auth
