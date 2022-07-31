import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import useConnect from '../../useConnect';
import * as action from '../../control';

function Control() {
  const hideWorkspace = (val) => {
    console.log("9999999999999999");
    action.hideWorkspace(val);
  }

  return (
    <div className="container" onClick={() => hideWorkspace("hide-workspace")}>
      <div className='add-workspace'>
        <div className='add-name'>
          <div className='add-plus'>
            <img className='center-img' src='img/workspace/plus.png'></img>
          </div>
          <div className='add-title'>
            <input className='input-title' placeholder="Name your workspace"></input>
          </div>
        </div>
        <div className='add-setting'>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
          <div className='workspace-letter'><p>Separate Cookies</p></div>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
          <div className='workspace-letter'><p>Incognito Tab</p></div>
        </div>
      </div>
      <div className='emoji'>
        <img className='stretch-img' src='img/workspace-emoji.png'></img>
      </div>
    </div>
  );
}

// eslint-disable-next-line no-undef
ReactDOM.render(<Control />, document.getElementById('app'));
