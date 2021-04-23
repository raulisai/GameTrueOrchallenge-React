import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Customize from "./page/Customize";
import MakeChallenge from "./page/MakeChallenge";
import NotFound from "./page/NotFound";

import "bootstrap/dist/css/bootstrap.css";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/customize" component={Customize} />
          <Route exact path="/MakeChallenge" component={MakeChallenge} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
