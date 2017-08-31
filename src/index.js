import 'basscss/css/basscss.css';
import {h, render} from 'preact'; // eslint-disable-line no-unused-vars
import {Provider} from 'preact-redux';
import {createStore} from 'redux';

import './index.css';
import App from './containers/app';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer);

render(<Provider store={store}><App /></Provider>,
       document.getElementById('root'));

registerServiceWorker();
