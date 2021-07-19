import React from 'react';
import './header-option.css';
import { Avatar } from '@material-ui/core';

function headerOptions({ title, Icon, avatar }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {!Icon && <Avatar className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default headerOptions;
