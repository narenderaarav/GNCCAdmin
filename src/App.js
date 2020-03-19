import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SideMenu from './SideMenu/SideMenu';
import UserManagement from './pages/UserManagement';
import CreateEvent from './pages/CreateEvent';
import MembersList from './pages/MembersList';
import Tour from './pages/Tour';
import SlideMenuBar from './pages/SlideMenuBar';
import Login from './Login/Login'



class App extends Component {
  // state = {
  //   authenticated: false
  // }

  constructor(props){
    super(props)
    var value = sessionStorage.getItem("authenticated");
    value = value != null ? JSON.parse(value) : false;

    this.state = {authenticated: value};
  }

  onLoggedIn = () => {
    sessionStorage.setItem("authenticated", "true");
    this.setState({authenticated: true});
  }

  render() {
    if (this.state.authenticated) {
      return (<div className="App">
      <div className="wrapper">
        <Router>
          <SideMenu />
          <div className="contentArea">
            <SlideMenuBar />
            <Switch>
              
              <Route path="/tour">
                <Tour/>
              </Route>
              <Route path="/CreateEvent">
                <CreateEvent />
              </Route>
              <Route path="/daliyRide">
                <MembersList />
              </Route>
              <Route path="/">
                <UserManagement />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>)
    }else{
      return(<Login onLoggedIn1={this.onLoggedIn}/>)
    }
  }
}

export default App;
