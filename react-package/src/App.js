import React from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import NavbarHeader from './components/NavbarHeader';
import Home from './components/home/index';
import LoginForm from './components/forms/loginform/LoginForm'

import RegistrationForm from './components/forms/registForm/RegistrationForm';
import UserDashboardHeader from './components/usersDashboard/UserWrapper';
import Activity from './components/usersDashboard/activity/Activity';
import UserProfile from './components/usersDashboard/userProfile/Wrapper'
import Encounter from './components/usersDashboard/encounters/Wrapper'
import Messages from './components/usersDashboard/messages/Wrapper'
// import UserDetails from './components/usersDashboard/photofeed/Wrapper'

import FooterSection from './components/footer/FooterWrapper';



function App() {
  return (
      <div className="App">  
          <BrowserRouter>           
              <Switch>
                <Route  path="/login" component={LoginForm} />
                <Route  path="/register" component={RegistrationForm} />
                <Route  path="/users" component={UserDashboardHeader} />
                <Route exact path="/activity" component={Activity} /> 
                <Route exact path="/userProfile" component={UserProfile} /> 
                <Route exact path="/messages" component={Messages} /> 
                <Route exact path="/encounters" component={Encounter} /> 
                {/* <Route exact path="/userDetails" component={UserDetails} />  */}
                <div>
                  <NavbarHeader />
                  <Route exact path="/" component={Home} /> 
                </div>
              </Switch> 
                  <FooterSection />
        </BrowserRouter>
        </div>
     
  );
}

export default App;
