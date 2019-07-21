import React from 'react';
import './panel.scss';

export default function Panel(props) {
  return (
    <div className="panel">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}