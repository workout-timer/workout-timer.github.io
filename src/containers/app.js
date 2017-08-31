// @flow

import {h} from 'preact'; // eslint-disable-line no-unused-vars
import {connect} from 'preact-redux';

import {start, nextStep} from '../actions';
import type {State} from '../reducer';
import Start from '../ui/start';
import Workout from '../ui/workout';

const mapStateToProps = ({current}: State) => ({
  workoutStarted: !!current,
  workout: current,
});

const mapDispatchToProps = dispatch => ({
  onStartWorkoutClicked: () => dispatch(start()),
  onNextStepClicked: () => dispatch(nextStep())
});

const App = ({
    workoutStarted,
    workout,
    onStartWorkoutClicked,
    onNextStepClicked
  }) =>
    workoutStarted?
      <Workout workout={workout} onNextStepClicked={onNextStepClicked}/> :
      <Start onStartWorkoutClicked={onStartWorkoutClicked}/>;

export default connect(mapStateToProps, mapDispatchToProps)(App)
