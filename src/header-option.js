import React from 'react';
import './header-option.css';

function headerOptions({ title, Icon }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption___icon" />}
      <h3 className="headerOption___title">{title}</h3>
    </div>
  );
}

export default headerOptions;
