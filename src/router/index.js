import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "../pages/dashboard";
import Form from "../pages/form";
import Confirmation from "../pages/confirmation";

const Header: React.FC<any> = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Dashboard />
            </Route>
            <Route exact path="/form">
                <Form />
            </Route>
            <Route exact path="/confirmation">
                <Confirmation />
            </Route>
        </Switch>
</Router>
  );
};

export default Header;
