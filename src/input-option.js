import React from 'react';
import './input-option.css';

function inputOption({ title, Icon, color }) {
  return (
    <div className="inputoption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default inputOption;
