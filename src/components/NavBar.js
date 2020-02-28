import React, { useContext } from 'react';

import {UserContext} from '../context/user/UserContext';
import {NavLink} from 'react-router-dom';



export const NavBar = () => 
{ 
    const {isAuth, logout} = useContext(UserContext)
  
      return (
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="navbar-brand">News app</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Main page</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/createNews">Create News</NavLink>
        </li>
        {
          isAuth
          ? 
            <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={logout()}>Log Out</NavLink>
            </li>
          :
            <li className="nav-item">
            <NavLink className="nav-link" to="/login&register">Login/Register</NavLink>
            </li>
        }
      </ul>

    </nav>
        )
}