import React from 'react';
import { Link } from 'react-router-dom';

import './SideNav.less';

const SideNav = () => (
  <div className="SideNav">
    <h1>Side Nav</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default SideNav;
