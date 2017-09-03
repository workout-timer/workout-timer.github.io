import React from 'react';

import BottomButton from './bottom-button';
import logo from '../img/row.svg';

export default ({onStartWorkoutClicked}) =>
  <div className="flex-auto flex flex-column">
    <div className="flex-auto">
      <img
        src={logo}
        alt="Rowing timer logo"
        style={{width: '75%', maxWidth: '200px'}}
        className="block mt4 mx-auto"/>
    </div>
    <BottomButton onClick={onStartWorkoutClicked}>LETS GO</BottomButton>
  </div>;
