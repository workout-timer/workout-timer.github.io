import 'basscss/css/basscss.css';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import db from './db';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import App from './ui/app';

let store = createStore(reducer, {});

render(<App store={store}/>, document.getElementById('root'));

store.subscribe(({current} = store.getState()) =>
  current? db().set(current.start.valueOf().toString(), current) : null);

registerServiceWorker();
