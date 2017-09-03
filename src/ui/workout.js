// @flow
import React, {Component} from 'react';

import BottomButton from './bottom-button';
import type {Workout as WorkoutType, Rep} from './../reducer';

type WorkoutProps = {workout: WorkoutType, onNextStepClicked: () => any}

const RepView = ({lastRep, onNextStepClicked}) =>
  <div className="flex-auto flex flex-column">
    <h1 className="center flex-grow">
      <span style={{fontSize: '3em'}}>{lastRep.count}</span>
      <br/>
      REPS
    </h1>
    <BottomButton onClick={onNextStepClicked}>DONE</BottomButton>
  </div>;

const RestView = ({lastRep, seconds, onNextStepClicked}) =>
  <div className="flex-auto flex flex-column bg-blue white">
    <h1 className="center flex-grow">
      NOW REST
      <br/>
      <span style={{fontSize: '3em'}}>{(seconds / 1000).toFixed(2)}</span>
    </h1>
    <BottomButton onClick={onNextStepClicked} buttonClassName="bg-white blue">
      LETS GO AGAIN
    </BottomButton>
  </div>;

export default class Workout extends Component<WorkoutProps, any> {
  interval: number;

  constructor() {
    super();
    this.state = {};
  }

  lastRep(): Rep {
    return this.props.workout.reps[this.props.workout.reps.length - 1];
  }

  isResting() {
    return this.lastRep().end != null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        if (this.isResting())
          this.setState({
            secondsRested: Date.now() - (this.lastRep().end || 0)
          });
      }, 83);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return this.isResting()?
      <RestView
        lastRep={this.lastRep()}
        seconds={this.state.secondsRested || 0}
        onNextStepClicked={this.props.onNextStepClicked}/> :
      <RepView
        lastRep={this.lastRep()}
        onNextStepClicked={this.props.onNextStepClicked}/>
  }
}
