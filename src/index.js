import 'basscss/css/basscss.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
import App from './containers/app';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer);

render(<Provider store={store}><App /></Provider>,
       document.getElementById('root'));

registerServiceWorker();
