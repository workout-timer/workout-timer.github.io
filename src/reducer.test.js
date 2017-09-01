import assert from 'assert';

import {createStore} from 'redux';

import {start, nextStep} from './actions';
import reducer from './reducer';

const ANY_DATE = {};

/** assert deep equality, except dates don't have to be equal */
let assertEqualState = (actual, expected) => {
  if (typeof actual == 'number')
    return actual == expected;
  else if (typeof actual == 'string') // don't use `new String` in reducer
    return actual == expected;
  else if (expected === ANY_DATE)
    return actual instanceof Date;
  else if (actual === null)
    return expected === null;
  else if (actual === undefined)
    return expected === undefined;

  assert.equal(Object.keys(actual).length, Object.keys(expected).length);
  Object.keys(actual).forEach(k => assert.ok(expected.hasOwnProperty(k)))

  for (let key in actual)
    assertEqualState(actual[key], expected[key]);
}

it('adds a rep entry for each NextStep action', () => {
  const store = createStore(reducer);
  assertEqualState(store.getState().current, undefined);
  store.dispatch(start());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [{count: 20, start: ANY_DATE}]
  });
  store.dispatch(nextStep());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [{count: 20, start: ANY_DATE, end: ANY_DATE}]
  });
  store.dispatch(nextStep());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [
      {count: 20, start: ANY_DATE, end: ANY_DATE},
      {count: 18, start: ANY_DATE},
    ]
  });
  store.dispatch(nextStep());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [
      {count: 20, start: ANY_DATE, end: ANY_DATE},
      {count: 18, start: ANY_DATE, end: ANY_DATE},
    ]
  });
  store.dispatch(nextStep());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [
      {count: 20, start: ANY_DATE, end: ANY_DATE},
      {count: 18, start: ANY_DATE, end: ANY_DATE},
      {count: 16, start: ANY_DATE},
    ]
  });
  store.dispatch(nextStep());
  assertEqualState(store.getState().current, {
    start: ANY_DATE,
    reps: [
      {count: 20, start: ANY_DATE, end: ANY_DATE},
      {count: 18, start: ANY_DATE, end: ANY_DATE},
      {count: 16, start: ANY_DATE, end: ANY_DATE},
    ]
  });
});
