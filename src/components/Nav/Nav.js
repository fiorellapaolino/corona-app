import React from 'react'
import './nav.scss';
import { NotificationsNone } from "@material-ui/icons";
import user from '../../assets/user.png';

function Nav() {
    return (
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
