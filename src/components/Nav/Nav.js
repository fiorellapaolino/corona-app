import React from 'react'
/* import {
    Link
  } from "react-router-dom"; */
import './Nav.scss';
import { NotificationsNone } from "@material-ui/icons";
import user from '../../assets/user.png';

function Nav() {
    return (
 /*      <nav className="sticky">
        <ul className="main-nav">
          <li className="text-link"><Link to="/">Covid-19 Infected</Link></li>
          <li className="text-link"><Link to="/Countries">Countries</Link></li>
        </ul>
      </nav> */
      <div className="navbar">
        <div className="navbarWrapper">
          <div className="navLeft">
            <span className="logo">Covid-19 </span>
          </div>
          <div className="navRight">
            <div className="navbarIconContainer">
                <NotificationsNone/>
                <span className="navIconBadge">2</span>
            </div>
            <img src={user} alt="" className="navUser" />
            <h3>Dr. Health</h3>
          </div>
        </div>
      </div>
    )
}

export default Nav
