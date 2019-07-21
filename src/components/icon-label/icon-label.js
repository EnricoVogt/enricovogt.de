import React from 'react';
import './icon-label.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconLabel(props) {
  return (
    <React.Fragment>
      <span style={{width: '25px', display:'inline-block', textAlign: 'center'}}>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      {props.children}
    </React.Fragment>
  );
}