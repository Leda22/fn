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
import Axios from 'axios'
import Learn from "./Learn";
import About from "./About";
import Profilview from "./Profilview";
import Notfound from "./Notfound";



export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    Axios.get('http://localhost:3030/login').then((response) => {
      if (response.data.loggedIn === true) {
        setLoggedIn(true)
      }else {setLoggedIn(false)}
    })
  }, [])
  return (
    <Router>
        <Switch>
          <Route exact path="/clubs" component={Clubs}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/learn" component={Learn}/>
          <Route exact path="/about" component={About}/>
          <Route exact path='/admin' 
          component={ ()=> <Admin loggedIn={loggedIn} />}/>
          <Route exact path='/profil' 
          component={ ()=> <Profils loggedIn={loggedIn} />}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path="/" component={Home}/>
          <Route exact path='/clubs' component={Clubs}/>
          <Route exact path='/@username' component={Profilview}/>
          <Route exact path='/notfound' component={Notfound}/>



        </Switch>
    </Router>
  );
}