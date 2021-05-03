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
          <p>Logiclude News </p>
          <p> &copy; Logiclude Inc.</p>
          <p>Tagbilaran City, Bohol, Philippines 6300</p>
          <p>+639468026076</p>
          <p>Development: dev.logiclude@gmail.com</p>
          <p>Support: support.logiclude@gmail.com</p>
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
          <div className="about_us">
            <p>
              Logiclude News is a news website under the Subsidiary of Logiclude
              Inc.Logicude aims to provide the latest and reliable tech news.
            </p>
          </div>
        </div>

        <div className="dev_info">
          <h3>About Developer</h3>
          <h4>Developed and Maintained by:</h4>
          <p>Dev_Joe</p>
          <p>Contact Number: +639456881841</p>
          <p>Email: geniojoseph27@gmail.com</p>
          <div className="developer_social_media">
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/facebook_icon.png"}
                  alt="dev_joe facebook"
                />
              </li>

              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/instagram_icon.png"}
                  alt="dev_joe instagram"
                />
              </li>

              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/twitter_icon.png"}
                  alt="dev_joe twitter"
                />
              </li>

              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/whatsapp.png"}
                  alt="dev_joe whatsapp"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/linkedin_icon.png"}
                  alt="dev_joe linkedin"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="donate">
          <Link to="/" className="donate_link">
            Buy me a coffee
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutComponent;
