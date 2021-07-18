import React from 'react';
import HeaderOption from './header-option';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="header___left">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="Linkedin Icon"
        />

        <div className="header___search">
          {/* Search */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header___right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
      </div>
    </div>
  );
}

export default Header;
