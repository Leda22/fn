import React from 'react'
//import { Redirect } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Profil from './presidents/Profil';
import Calendar from './presidents/Calendarpr';
import Profiluser from './presidents/Profiluser';
import Members from './presidents/Members';
import Chatclub from './presidents/Chatclub';
import Registrations from './presidents/Registrations';


function Profils() {
    return (
        <Router>
        <Switch>
        <Route exact path="/profil" component={Profil}/>
        <Route exact path="/profil/calendar" component={Calendar}/>
        <Route exact path="/profil/@username" component={Profiluser}/>
        <Route exact path="/profil/Members" component={Members}/>
        <Route exact path="/profil/chat" component={Chatclub}/>
        <Route exact path="/profil/registrations" component={Registrations}/>






        </Switch>
    </Router>
    )
}

export default Profils
