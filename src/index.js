import 'basscss/css/basscss.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import db from './db';
import App from './containers/app';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer, {});

render(<Provider store={store}><App /></Provider>,
       document.getElementById('root'));

store.subscribe(({current} = store.getState()) =>
  current? db().set(current.start.valueOf().toString(), current) : null);

registerServiceWorker();
