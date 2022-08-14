import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {

  const token = localStorage.getItem('token');
  return (
    <header className="showcase">
        <div className="showcase-top">
          {
            token? (
              < Link to="/login" className="btn btn-rounded" onClick={e=> localStorage.clear()}>
              Logout          
            </Link> 
            ):
            (
              < Link to="/login" className="btn btn-rounded">
               Login           
            </Link> 
            )
          }  
        </div>
        <div className="showcase-content">
            <h1>"Pluto" a website to watch your movies</h1>
            <p>Watch anywhere. cancel Anytime</p><br/>
            <Link to="/netflix-show" className="btn-header btn-xl">           
                View our movie collections
                <i className="fas fa-chevron-right btn-icon"></i>  
            </Link>
        </div>
    </header>
  );
};

export default Header;