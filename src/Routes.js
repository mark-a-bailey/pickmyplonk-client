import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Http404NotFound from "./containers/errors/Http404NotFound";

export default () =>
    <Switch>
        <Route path="/" exact component={Home} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={Http404NotFound} />
    </Switch>;