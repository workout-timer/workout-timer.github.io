import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav.css';
import House from '../img/house';
import List from '../img/list';

const linkClass = "px2 flex-auto"
const iconStyle = {width: '2rem'};

export default () =>
  <nav className="flex flex-justify p2 bg-black center">
    <NavLink className={linkClass} to="/" exact>
      <House style={iconStyle} alt="Home"/>
    </NavLink>
    <NavLink className={linkClass} to="/workouts">
      <List style={iconStyle} alt="Workouts"/>
    </NavLink>
  </nav>;
