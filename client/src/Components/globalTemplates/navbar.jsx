import React, { useEffect, useState, useRef } from "react";
import "../../Style/generalTemplates/navbar.css";
import { darkTheme, lightTheme } from "../../utility/Themes";
import { Link } from "react-router-dom";

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
                src={process.env.PUBLIC_URL + "/images/fb_logo.png"}
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

  return (
    <React.Fragment>
      {expandedMenu ? <MobileMenu closeBtn={closeMenu} /> : null}
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
            <Link to="/">
              <img
                src={
                  props.mode === "light"
                    ? lightTheme.site_img
                    : darkTheme.site_img
                }
                alt="Logiclude"
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" className="__link">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/science" className="__link">
                  SCIENCE
                </Link>
              </li>
              <li>
                <Link to="/gadgets" className="__link">
                  GADGETS
                </Link>
              </li>
              <li>
                <Link to="/games" className="__link">
                  GAMES
                </Link>
              </li>
              <li>
                <Link to="/stream" className="__link">
                  STREAMING
                </Link>
              </li>
              <li>
                <Link to="/about" className="__link">
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mobile_access_right">
            <div className="mobile_search">
              <Search viewport_mode="mobile" mode={props.mode} />
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;

function Search(props) {
  const search_icon = useRef();
  const search = useRef();
  const search_input = useRef();
  // Search Expansion Function
  function searchAnimate() {
    let { classList: searchIconClass } = search_icon.current;
    let { classList: searchClass } = search.current;
    let { classList: searchInputClass } = search_input.current;
    searchIconClass.add("search_icon_active");
    searchClass.add("search_active");
    searchInputClass.add("input_active");
    search_input.current.disabled = false;
    search_input.current.focus();
  }

  return (
    <React.Fragment>
      <div
        className={
          props.mode === "light" && props.viewport_mode === "mobile"
            ? "search m_search_light"
            : "search m_search_dark"
        }
        ref={search}
      >
        <input
          type="text"
          name="search__input"
          id={props.viewport_mode}
          placeholder="Search"
          ref={search_input}
          disabled={true}
        />
        <img
          ref={search_icon}
          onClick={searchAnimate}
          src={process.env.PUBLIC_URL + "/svg/search_icon.svg"}
          alt="search"
        />
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
            <p>MODE</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function MobileMenu(props) {
  return (
    <React.Fragment>
      <div className="mobile_menu">
        <div className="mobile_menu_header">
          <h1>LOGO</h1>
          <div className="close_btn" onClick={() => props.closeBtn()}>
            X
          </div>
        </div>
        <div className="mobile_menu_list">
          <ul>
            <li>HOME</li>
            <li>SCIENCE</li>
            <li>GADGETS</li>
            <li>GAMES</li>
            <li>STREAMING</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
