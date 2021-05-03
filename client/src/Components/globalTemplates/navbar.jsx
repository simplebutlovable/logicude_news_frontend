import React, { useEffect, useState } from "react";
import "../../Style/generalTemplates/navbar.css";
import { darkTheme, lightTheme } from "../../utility/Themes";
import { Link, NavLink } from "react-router-dom";

function currentDate() {
  const params = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date().toLocaleDateString("en-US", params);
  return date;
}

function Navigation(props) {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(currentDate);
    });
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <React.Fragment>
      <section className="navbar">
        <div className="menu">
          <div className="realtime_date_section">
            <p> {date}</p>
          </div>
          <div className="right_menu">
            <div className="night_mode_section">
              <NightMode
                onThemeChange={props.onThemeChange}
                mode={props.mode}
              />
            </div>
            <div className="social_media_section">
              <img
                src={process.env.PUBLIC_URL + "/images/facebook.png"}
                alt="news_fb"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/twitter.png"}
                alt="news_twitter"
              />
            </div>
            <div className="search_section">
              <Search viewport_mode="desktop" mode={props.mode} />
            </div>
          </div>
        </div>
      </section>
      <SubNavigation mode={props.mode} onThemeChange={props.onThemeChange} />
    </React.Fragment>
  );
}

function SubNavigation(props) {
  const [expandedMenu, setExpandedMenu] = useState(false);
  function menuShow() {
    setExpandedMenu(true);
  }

  function closeMenu() {
    setExpandedMenu(false);
  }

  function activeLinkStyle() {
    return { borderBottom: "2px solid gray", color: "red", cursor: "default" };
  }

  return (
    <React.Fragment>
      <div
        className="subnav"
        style={
          props.mode === "light"
            ? { backgroundColor: "white", transition: "0.5s linear" }
            : { backgroundColor: darkTheme.body, transition: "0.5s linear" }
        }
      >
        <div className="subnav_container">
          <div className="site_logo">
            <Link to="/" className="site_markup">
              <img
                src={
                  props.mode === "light"
                    ? lightTheme.site_img
                    : darkTheme.site_img
                }
                alt="Logiclude"
              />
              <h2>NEWS</h2>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/science"
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  SCIENCE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gadgets"
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  GADGETS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/games"
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  GAMES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stream"
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  STREAMING
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeStyle={activeLinkStyle()}
                  className="__link"
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="mobile_access_right">
            <div className="mobile_nav">
              <div
                className={
                  props.mode === "light"
                    ? "burger_menu m_light"
                    : "burger_menu m_dark"
                }
                onClick={menuShow}
              >
                <div className="b_1 b_line"></div>
                <div className="b_2 b_line"></div>
                <div className="b_3 b_line"></div>
              </div>
             
                  <MobileMenu closeBtn={closeMenu} menuState={expandedMenu} />
          
           
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;

function Search(props) {
  return (
    <React.Fragment>
      <div className="search_container">
        <div className="search_input">
          <input type="search" name="search" autoComplete="off" />
        </div>
      </div>
    </React.Fragment>
  );
}

function NightMode(props) {
  return (
    <React.Fragment>
      <div className="night_mode_switch">
        <div
          className={
            props.mode === "light"
              ? "night_container light_switch_container"
              : "night_container dark_switch_container"
          }
          onClick={() => props.onThemeChange()}
        >
          <div
            className={
              props.mode === "light"
                ? "toggler light_toggle"
                : "toggler dark_toggle"
            }
          >
            <div className="night_mode_icon">
              <img
                src={
                  props.mode === "light"
                    ? lightTheme.mode_icon
                    : darkTheme.mode_icon
                }
                alt={props.mode}
              />
            </div>
          </div>
          <div
            className={
              props.mode === "light"
                ? "toggle_label label_left"
                : "toggle_label label_right"
            }
          >
            {props.mode === "light" ? <p>LIGHT</p> : <p>DARK</p>}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function MobileMenu(props) {
  return (
    <React.Fragment>
      <div
        className={
          props.menuState ? "mobile_menu mob_men_active" : "mobile_menu mob_men_inactive"
        }
        style={props.menuState ? { right: "0" } : { right: "-40%" }}
      >
        <div className="mobile_menu_header">
          <div className="mobile_site_logo">
            <img src={process.env.PUBLIC_URL + "/images/logiclude_dark_mode.png"} alt="logiclude dark" width="100px"/>
            <h3>NEWS</h3>
          </div>
          <div className="close_btn" onClick={() => props.closeBtn()}>
            X
          </div>
        </div>
        <div className="mobile_menu_list">
          <ul>
            <li><Link to="/" className="link">HOME</Link></li>
            <li><Link to="/science" className="link">SCIENCE</Link></li>
            <li><Link to="/gadgets"className="link">GADGETS</Link></li>
            <li><Link to="/games" className="link">GAMES</Link></li>
            <li><Link to="/stream"className="link">STREAMING</Link></li>
            <li><Link to="/about"className="link">ABOUT</Link></li>
            
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
