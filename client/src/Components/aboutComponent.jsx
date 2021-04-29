import React from "react";
import { Helmet } from "react-helmet-async";
import { darkTheme, lightTheme } from "../utility/Themes";
import "../Style/about_component.css";

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
          </div>
          <p> &copy; Logiclude Inc.</p>
          <p>Taytay, Loboc, Bohol, Philippines 6316</p>
          <p>+639468026076</p>
          <p>logiclude.gmail.com</p>
          <div className="dev_info">
            <h3>Developed and Maintained by:</h3>
            <p>Dev_Joe</p>
            <p>+639456881841</p>
            <p>jgenz27@gmail.com</p>
            <div className="developer_social_media">
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/facebook.png"}
                    alt="logiclude facebook"
                  />
                </li>

                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram.png"}
                    alt="logiclude instagram"
                  />
                </li>

                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter_logo.png"}
                    alt="logiclude twitter"
                  />
                </li>

                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/whatsapp.png"}
                    alt="logiclude whatsapp"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutComponent;
