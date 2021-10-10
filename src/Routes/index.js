import "./style.css";

import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Event from "../pages/Event";
import AddPage from "../pages/AddPage";

const Routes = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/event/:name">
          <Event />
        </Route>
        <Route path="/add">
          <AddPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
