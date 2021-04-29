import React from "react";
import "../../Style/generalTemplates/footer.css";
import { darkTheme, lightTheme } from "../../utility/Themes";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_info">
            <img src={props.mode === 'light' ?lightTheme.site_img : darkTheme.site_img } alt="logiclude"/>
            <p>&copy; logiclude inc.</p>
            <p>Designed and Maintaned by :@simplebutlovable</p>
            <p>All Rights Reserved {new Date().getFullYear()}</p>
          </div>
          <div className="advertise">
            <h1>Advertise with us</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
