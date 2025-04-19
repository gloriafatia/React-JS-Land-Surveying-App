import React from "react";
import video from "../assets/GeoMatriks.mp4";

const Banner = () => {
  return (
    <header className="header">
      <div className="header__video-container">
        <video autoPlay loop muted className="header__video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <p></p>
              </div>
              
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
