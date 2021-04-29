import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/generalTemplates/subfooter.css";

function SubFooter (props) {
const [email, setEmail] = useState()
const getEmailValue = (e)=>{
setEmail(e.target.value);
if (e.key === 'Enter'){
  alert("hoy")
}
}

const submitNewsLetter = (e)=> {
  e.preventDefault();
  console.log("Email: ",email)
}

const handleKeyPress = (e)=>{
  if (e.key === 'Enter'){
    submitNewsLetter(e);
  }
}

  return (
    <React.Fragment>
      <div className="_subfooter">
        <div className="newsletter">
          <img
            src={process.env.PUBLIC_URL + "/images/message.png"}
            alt="logiclude newsletter"
            className={props.mode === 'light' ? 'img_light' : 'img_dark'}
          />
          <h1>Newsletter</h1>
          <p>Stay up to date with our latest news</p>
          <div className="newsletter_input">
            <input type="email" name="newsletter_email" id="newsletter_email" onChange={getEmailValue} onKeyPress={handleKeyPress}/>
            <input type="submit" value="Subscribe" onClick={submitNewsLetter}/>
          </div>
          <p style={{color: "green"}}>Your email is safe with us, we don't spam</p>
        </div>
        <div className="submenu">
          <ul>
            <li>
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/science" className="link">
                SCIENCE
              </Link>
            </li>
            <li>
              <Link to="/gadgets" className="link">
                GADGETS
              </Link>
            </li>
            <li>
              <Link to="/games" className="link">
                GAMES
              </Link>
            </li>
            <li>
              <Link to="/stream" className="link">
                STREAMING
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}


export default SubFooter;
