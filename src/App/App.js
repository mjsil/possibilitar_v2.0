import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import HeaderComponent from "../client/components/Header";
import Home from "../client/pages/Home";
import About from "../client/pages/About";

const navigation = [
  {
    id: 1,
    to: "/",
    title: "HOME",
  },
  {
    id: 2,
    to: "/about",
    title: "PROJETO",
  },
  {
    id: 3,
    to: "/jobs",
    title: "VAGAS",
  },
  {
    id: 4,
    to: "/contact",
    title: "CONTATO",
  },
];

const App = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <HeaderComponent navigation={navigation} pathname={pathname} />

      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
