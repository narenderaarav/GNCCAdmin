import React from 'react';
import './SideMenu.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClock,
    faUsers,
    faUser,
    faBell,
    faCalendarCheck, 
} from '@fortawesome/free-solid-svg-icons'

//const showText = true;

function SideMenu(props) {
    return <React.Fragment>
           <div className="sidebarWraper"> 
            <nav className="sidebar" id="sidebar">
                <div className="sidebar-header logo">
                    <h3><img src="./images/GNCC-logo.png"/></h3>
                </div>

                <ul className="list-unstyled components">
                    {/* <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse"
                          aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                        </ul>
                    </li> */}

                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            <FontAwesomeIcon icon={faUsers} /> <span>User Management</span>
                            {/* {props.showText && <span>Attendance</span>} */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/CreateEvent" activeClassName="active">
                             <FontAwesomeIcon icon={faCalendarCheck} /> <span>Create Events</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/daliyRide" activeClassName="active">
                        <FontAwesomeIcon icon={faUsers} /> <span>Daily Ride</span>
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink exact to="/tour" activeClassName="active">
                        <FontAwesomeIcon icon={faBell} /> <span>Tour</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
            </div>
            
  
    </React.Fragment>
}

// https://www.techiediaries.com/react-bootstrap/
// https://bootstrapious.com/tutorial/sidebar/index4.html#
// https://github.com/FortAwesome/react-fontawesome


export default SideMenu;
