import React, { useState, useEffect } from 'react';
import Card from './components/card/card'
import SplitView from './components/split-view/split-view'
import Logo from './components/logo/logo'
import Panel from './components/panel/panel'
import ViewmodeToggle from './components/viewmode-toggle/viewmode-toggle'
import IconLabel from './components/icon-label/icon-label'

import { faXing } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './App.scss';

export const ThemeContext = React.createContext();

function App() {

  const toggleTheme = function () {
    setState(state => {
      return {
        ...state,
        theme: (state.theme === 'light') ? 'dark' : 'light'
      }
    });
  }

  useEffect(() => {
    if(matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleTheme();
    }
  }, [])

  const [state, setState] = useState({
    theme: 'light',
    toggleTheme: toggleTheme
  });

  return (
    <ThemeContext.Provider value={state}>
      <div className={state.theme}>
        <div style={{paddingTop:'2rem'}}>
          <Logo />
          <Card className="main">
            <div style={{ "float": "right" }}>
              <ViewmodeToggle></ViewmodeToggle>
            </div>
            <div style={{ "height": 85 + "px" }}></div>
            <h1>Enrico Vogt</h1>
            <h2>Software Developer</h2>
            <SplitView>
              <Panel title="Web Profiles">
                <ul>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/Enrico_Vogt6/">
                      <IconLabel icon={faXing}>XING</IconLabel>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/EnricoVogt">
                      <IconLabel icon={faGithub}>GitHub</IconLabel>
                    </a>
                  </li>
                </ul>
              </Panel>
              <Panel title="Contact">
                <a href="mailto:info@enricovogt.de">
                  <IconLabel icon={faEnvelope}>info@enricovogt.de</IconLabel>
                </a>
              </Panel>
            </SplitView>
          </Card>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
