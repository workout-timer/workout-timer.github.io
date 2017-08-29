import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import App from './app';
import reducer from '../reducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(reducer);
  ReactDOM.render(<App store={store}/>, div);
});
