import React from 'react';
import { Avatar } from '@material-ui/core';
import './sidebar.css';

function sidebar() {
  const RecentItem = (topic) => (
    <div className="sidebar__recentitem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://unsplash.com/photos/X-ceils-p3I/download?force=true&w=640"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Shan.tk</h2>
        <h4>me@sudharshan.tk</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who Viewed your Profile</p>
          <p className="sidebar__stat__number">2986</p>
        </div>
        <div className="sidebar__stat">
          <p>Followers Count</p>
          <p className="sidebar__stat__number">500</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {RecentItem('Reactjs')}
        {RecentItem('Vuejs')}
        {RecentItem('Coding')}
        {RecentItem('Programming')}
        {RecentItem('Developer')}
        {RecentItem('Web Development')}
      </div>
    </div>
  );
}

export default sidebar;
