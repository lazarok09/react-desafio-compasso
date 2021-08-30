import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Home } from "./templates/Home";
import { User } from "./templates/User";
import { Starred } from "./templates/Starred";
import { Repos } from "./templates/Repos";
import { UserContextProvider } from "./context/UserContext/index";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <Aside />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user" exact component={User} />
          <Route path="/starred" exact component={Starred} />
          <Route path="/repos" exact component={Repos} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
