import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import './index.css';
import Home from '../containers/home';
import Workouts from '../containers/workouts';
import Nav from '../ui/nav';

// https://twitter.com/notbrent/status/817584822310694912
export default ({store}) =>
  <Provider store={store}>
    <BrowserRouter>
      <main className="vfit flex flex-column">
        <section className="flex-auto flex flex-column">
          <Route exact path="/" component={Home}/>
          <Route exact path="/workouts" component={Workouts}/>
        </section>
        <Nav className="flex-none"/>
      </main>
    </BrowserRouter>
  </Provider>;
