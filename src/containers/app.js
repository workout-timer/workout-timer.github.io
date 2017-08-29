import React from 'react';
import {connect} from 'react-redux';

import Start from '../ui/start';
import {start} from '../actions';

const mapStateToProps = state => ({workoutStarted: !!state.currentWorkout});

const mapDispatchToProps =
  dispatch => ({onStartWorkoutClicked: () => dispatch(start())});

const App = ({workoutStarted, onStartWorkoutClicked}) =>
    workoutStarted?
      <div>flerg</div> :
      <Start onStartWorkoutClicked={onStartWorkoutClicked}/>;

export default connect(mapStateToProps, mapDispatchToProps)(App)
