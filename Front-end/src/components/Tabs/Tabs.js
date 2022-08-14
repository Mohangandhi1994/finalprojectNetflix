import React from "react";
import { tabLabels } from "./constant";
import { Link } from "react-router-dom";
import "./Tabs.css";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCEL_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );
  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCEL_AT_ANY_TIME,
            activeTabName === CANCEL_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-2"
          )}
        </div>
      </section>
      {activeTabName === CANCEL_AT_ANY_TIME && (
        <selection className="tab-content">
          <div className="container" >
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCEL_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-lg">
                    If you fell Pluto don't suits you? no problem. Cancel
                    online anytime you want!
                  </p>
                  <Link to="/netflix-show" className="btn btn-lg" style={{background: "#e50914",color:"#fff"}}>
                  Watch our movie collections
                  </Link>
                </div>
                <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
              </div>
            </div>
          </div>
        </selection>
      )}
      {activeTabName === WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV shows and Movies anytime you want
                </p>
                <Link to="/netflix-show" className="btn btn-lg"style={{background: "#e50914",color:"#fff"}}>
                  Watch our movie collections
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://c0.wallpaperflare.com/preview/558/696/992/technology-movie-movies-television.jpg"
                    alt=""
                  />
                  <p className="text-md">
                    Watch on your TV
                  </p>
                  <p className="text-secondary">
                    Smart TV, PlayStation, Xbox, AppleTV, Chromecast, Blue-Ray
                    and more
                  </p>
                </div>
                <div>
                <img
                    src="https://c1.wallpaperflare.com/preview/242/389/85/whatsapp-ios-iphone-phone.jpg"
                    alt=""
                  />
                  <p className="text-md">
                    Watch Now or Download for later
                  </p>
                  <p className="text-secondary">
                    Available on Mobile and Tablets, Wherever you go!
                  </p>
                </div>
                <div>
                <img
                    src="https://c0.wallpaperflare.com/preview/764/181/181/flowers-interior-room-home.jpg"
                    alt=""
                  />
                  <p className="text-md">
                   Use and Browser</p>
                  <p className="text-secondary">
                    Watch Rightnow on Pluto.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PICK_YOUR_PRICE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PICK_YOUR_PRICE && "show"
              }`}
            > 
            <div className="text-center">
                <p className="text-lg">
                    Choose one Plan and start enjoy watching Pluto.
                </p>
                <Link to="/netflix-show" className="btn btn-lg"style={{background: "#e50914",color:"#fff"}}>
                Watch our movie collections
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly price after 30 days free trial</td>
                            <td>€12</td>
                            <td>€24</td>
                            <td>€36</td>
                        </tr>
                        <tr>
                            <td>HD Availability</td>
                            <td><i className="fas fa-times"></i></td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr>
                        <tr>
                            <td>Ultra HD Availability</td>
                            <td><i className="fas fa-times"></i></td>
                            <td><i className="fas fa-times"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr>
                        <tr>
                            <td>Screens you can watch at same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                        <td>Watch on your Laptop, TV, Phone and Tablets</td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr>
                        <tr>
                            <td>Ultimate Movies and TV shows</td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr>
                        <tr>
                            <td>Cancel anytime</td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr>
                        <tr>
                            <td>First Month Free</td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td>
                            <td><i className="fas fa-check"></i></td> 
                        </tr> 
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </section> 
      )}   
    </>
  );
};

export default Tabs;
