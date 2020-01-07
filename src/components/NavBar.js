import React from 'react';
import {NavLink} from 'react-router-dom';



export const NavBar = () => 
{ 
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="navbar-brand">Test app</div>
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Main page</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/createNews">Create News</NavLink>
    </li>
  </ul>

</nav>
    )
}