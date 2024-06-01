import React from 'react'
import './Header.css'
import Notification from '../../assets/Notifications.svg'
import Profile from '../../assets/Profile.svg'
import Chevrondown from '../../assets/Chevron-down.svg'

function Header() {
  return (
    <div className="header-conatiner">
        <div className="header-content-left">
            <h3>Dashboard</h3>
        </div>
        <div className="header-content-right">
            <img src={Notification} alt="dashboard" />
            <img src={Profile} alt="dashboard" />
            <img src={Chevrondown} alt="dashboard" />
        </div>
    </div>
  )
}

export default Header