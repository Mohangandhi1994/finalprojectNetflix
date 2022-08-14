import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <header className="nav-showcase">
      <div className="nav-showcase-top">
        <ul className="nav-tab-entire">
          <li className="nav-bar-items">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-bar-items">
            <NavLink to="/tv-shows">TV Shows</NavLink>
          </li>
          <li className="nav-bar-items">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          { localStorage.getItem('user_name')&&<li className="nav-bar-items" >
            <NavLink to={`/profile/${localStorage.getItem('user_name')}`}>My Account</NavLink>
          </li>
          }
          

        </ul>
      </div>
      <h1 style={{float:"right"}} className="nav-banner-title">Welcome: {localStorage.getItem('user_name')? localStorage.getItem('user_name') :""}</h1>
      <div className="nav-banner-contents">
       
        <h1><b>Jai Bhim</b></h1>
      </div>
      
      <button className="nav-button">play</button> 
      <button className="nav-button">List</button>
      <h1 className="Nav-movie-description">
      A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.
      </h1>
    </header>
  );
};

export default Nav;
