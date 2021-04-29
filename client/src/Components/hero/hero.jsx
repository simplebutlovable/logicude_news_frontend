import React from "react";

import "../../Style/hero/hero.css";

function Hero() {
  return (
    <React.Fragment>
      <div className="main_container">
        <div className="bg_img">
          <img
            src={process.env.PUBLIC_URL + "/images/bg_img.jpg"}
            alt="pacific news"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
