import {h} from 'preact'; // eslint-disable-line no-unused-vars

import BottomButton from './bottom-button';
import logo from '../row.svg';

export default ({onStartWorkoutClicked}) =>
  <div>
    <img
      src={logo}
      alt="Rowing timer logo"
      style={{width: '75%', maxWidth: '200px'}}
      className="block mt4 mx-auto"/>
    <BottomButton onClick={onStartWorkoutClicked}>LETS GO</BottomButton>
  </div>;
