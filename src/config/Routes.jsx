import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/detail/Details";
import Catalog from "../pages/Catalog";
const Routes = () => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog}></Route>
      <Route path="/:category/:id" component={Details}></Route>
      <Route path="/:category/" component={Catalog}></Route>
      <Route path="/" exact component={Home}></Route>
    </Switch>
  );
};

export default Routes;
