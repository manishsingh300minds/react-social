import './App.scss';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Users from "./feature/users/pages/Users";
import NewPlace from "./feature/places/pages/NewPlace";
import Header from "./shared/components/header/header";
import React from "react";
import Login from "./auth/login/pages/login";
import Register from "./auth/register/pages/register";
import Feature from "./feature/feature";
function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/feature" exact component={Feature} />
            <Route path="/newPlace" exact component={NewPlace} />
            <Route path="/users" exact component={Users} />
            <Route path="/login" exact  component={Login} />
            <Route path="/register" exact component={Register} />
            <Redirect to='/feature' path='/' />
        </Switch>
    </Router>
  );
}

export default App;
