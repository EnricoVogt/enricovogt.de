import React from 'react';
import './split-view.scss';

export default function SplitView(props) {
  return (
    <div className="split-view">
      {props.children.map((x,k) => {
        return (
        <React.Fragment key={k}>
          {x}
          {props.children.length-1 !== k ? <div className="spacer"></div> : null}
        </React.Fragment>
        );
      })}
    </div>
  );
}