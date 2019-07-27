import React from 'react';
import './icon-label.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconLabel(props) {
  return (
    <span class="icon-label">
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      {props.children}
    </span>
  );
}