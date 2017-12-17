import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Http404NotFound from "./containers/errors/Http404NotFound";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" exact component={Login} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={Http404NotFound} />
    </Switch>;