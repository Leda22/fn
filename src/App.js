import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Profils from "./Profils";
import Learn from "./Learn";
import About from "./About";
import Profilview from "./Profilview";
import Notfound from "./Notfound";
import { useStateValue } from "./Auth";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";


export default function App() {
  const [{ user, admin, president }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === "abc@abc.com") {
          dispatch({
            type: actionTypes.SET_ADMIN,
            user: user,
            president: false,
            admin: true
          })
        } else {
          dispatch({
            type: actionTypes.SET_PRES,
            user: user,
            president: true,
            admin: false
          })
        }
        console.log(user)
      }
    });
  }, [])
  return (
    <Router>
        <Switch>
        {admin &&
          <Route exact path='/admin' component={Admin} />}

        {president &&
          <Route exact path='/profil' component={Profils} />}

          <Route exact path="/clubs" component={Clubs}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/learn" component={Learn}/>
          <Route exact path="/about" component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/@username' component={Profilview}/>
          <Route exact path='/notfound' component={Notfound}/>
        </Switch>
    </Router>
  );
}