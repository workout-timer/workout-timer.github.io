// @flow

import type {Action} from './actions';

export type Rep = {
  +count: number,
  +start: Date,
  +end?: Date,
};

export type Workout = {
  +start: Date,
  +reps: Array<Rep>,
}

export type State = {
  +current?: Workout
}

export default (state: State = {}, action: Action): State => {
  switch (action.type) {
    case 'start':
      return {
        current: {
          start: new Date(),
          reps: [{
            count: 20,
            start: new Date(),
          }],
        }
      };
    case 'nextStep':
      if (state.current == null)
        throw new Error('current may not be null when nextStep dispatched');

      const lastRep = state.current.reps[state.current.reps.length - 1];

      if (lastRep.end == null)
        return {
          current: {
            start: state.current.start,
            reps: [
              ...state.current.reps.slice(0, state.current.reps.length - 1),
              {
                ...lastRep,
                end: new Date(),
              }
            ]
          }
        };
      else
        return {
          current: {
            start: state.current.start,
            reps: [
              ...state.current.reps,
              {count: lastRep.count - 2, start: new Date()}
            ]
          }
        };
    default:
      // assert empty action so typechecking will fail if we forget to handle
      // one of the actions
      (action: empty); // eslint-disable-line
      return state;
  }
}
