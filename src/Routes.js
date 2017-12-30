import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewWineBottle from "./containers/wine/NewWineBottle";
import NewWineProducer from "./containers/wine/NewWineProducer";
import AppliedRoute from "./components/AppliedRoute";
import Http404NotFound from "./containers/errors/Http404NotFound";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        <AppliedRoute path="/login" exact component={Login} props={childProps} />
        <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
        {/*logged in pages*/}
        <AppliedRoute path="/wine/bottle/new" exact component={NewWineBottle} props={childProps} />
        <AppliedRoute path="/wine/producer/new" exact component={NewWineProducer} props={childProps} />

        { /* Finally, catch all unmatched routes */ }
        <Route component={Http404NotFound} />
    </Switch>;
