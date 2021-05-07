import React from "react";
import { Helmet } from "react-helmet-async";
import { darkTheme, lightTheme } from "../utility/Themes";
import "../Style/about_component.css";
import { Link } from "react-router-dom";

function AboutComponent(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Logiclude News- About Us</title>
      </Helmet>
      <div className="about_component">
        <div className="about_details">
          <div className="about_logo_cover">
            <div className="about_logo">
              <img
                src={
                  props.mode === "light"
                    ? lightTheme.site_img
                    : darkTheme.site_img
                }
                alt="logiclude"
              />
              <h2>NEWS</h2>
            </div>
          </div>
          <p>Logiclude News </p>
          <p> &copy; Logiclude Inc.</p>
          <p>Baclayon, Bohol, Philippines 6301</p>
          <p>+639456881841</p>
          <p>Support: support.logiclude@gmail.com</p>
          <div className="social_media_cover">
            <div className="site_social_media">
              <ul>
                <li>
                  <Link to="/">
                    <img
                      src={process.env.PUBLIC_URL + "/images/facebook_icon.png"}
                      alt="Logiclude Facebook"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      src={process.env.PUBLIC_URL + "/images/twitter_icon.png"}
                      alt="Logiclude Twitter"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img
                      src={process.env.PUBLIC_URL + "/images/whatsapp.png"}
                      alt="logiclude WhatsApp"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="about_us">
            <p>
              Logiclude News is a news website aims to provide the latest and reliable tech news.
            </p>
          </div>
          {/* <div className="collaborate_container">
            <div className="collaborate">
              <div className="donate">
                <Link to="/" className="donate_link">
                  Buy me a coffee
                </Link>
              </div>
              <div className="advertise_with_us">
                <Link to="/" className="donate_link">
                  Advertise with us
                </Link>
              </div>
            </div>
          </div> */}
        </div>

        <div className="dev_info">
         <div className="dev_info_header">
         <h3>About Developer</h3>
         </div>
         <div className="dev_info_list">
         <h4>Developed and Maintained by:</h4>
          <p>Dev_Joe</p>
          <p>Contact Number: +639468026076</p>
          <p>Email: geniojoseph27@gmail.com</p>
         </div>
          <div className="developer_social_media">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/facebook_icon.png"}
                    alt="dev_joe facebook"
                  />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram_icon.png"}
                    alt="dev_joe instagram"
                  />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter_icon.png"}
                    alt="dev_joe twitter"
                  />
                </Link>
              </li>

              <li>
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/whatsapp.png"}
                    alt="dev_joe whatsapp"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/images/linkedin_icon.png"}
                    alt="dev_joe linkedin"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutComponent;
