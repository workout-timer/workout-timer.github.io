// @flow
import React from 'react';
import {connect} from 'react-redux';

import {start, nextStep} from '../actions';
import type {State} from '../reducer';
import Workout from '../ui/workout';
import Start from '../ui/start';

const mapStateToProps = ({current}: State) => ({
  workoutStarted: !!current,
  workout: current,
});

const mapDispatchToProps = dispatch => ({
  onStartWorkoutClicked: () => dispatch(start()),
  onNextStepClicked: () => dispatch(nextStep())
});

const Home = ({
    workoutStarted,
    workout,
    onStartWorkoutClicked,
    onNextStepClicked
  }) =>
    !workoutStarted?
        <Start onStartWorkoutClicked={onStartWorkoutClicked}/> :
        <Workout workout={workout} onNextStepClicked={onNextStepClicked}/>;

export default connect(mapStateToProps, mapDispatchToProps)(Home)
