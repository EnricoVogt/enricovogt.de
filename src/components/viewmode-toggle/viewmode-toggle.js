import React from 'react';
import './viewmode-toggle.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import { ThemeContext } from '../../App'

export default function ViewmodeToggle(props) {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <span className="viewmode-toggle" onClick={() => context.toggleTheme()}>
          {context.theme === 'light' ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </span>
      )}
    </ThemeContext.Consumer>
  );
}